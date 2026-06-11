import type { Review } from '@/types'

// Add standard window typing for Google Maps API
declare global {
  interface Window {
    google: any
  }
}

/**
 * Dynamically loads the Google Maps JavaScript API script with Places library.
 */
export function loadGoogleMapsScript(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.maps?.places) {
      resolve()
      return
    }

    const scriptId = 'google-maps-places-script'
    
    // If script is already in the document but window.google is not ready yet
    if (document.getElementById(scriptId)) {
      const interval = setInterval(() => {
        if (window.google?.maps?.places) {
          clearInterval(interval)
          resolve()
        }
      }, 100)
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.head.appendChild(script)
  })
}

/**
 * Fetches reviews for a given Google Place ID using Google Maps PlacesService.
 */
export function fetchGoogleReviews(apiKey: string, placeId: string): Promise<Review[]> {
  return new Promise(async (resolve, reject) => {
    try {
      await loadGoogleMapsScript(apiKey)
      
      const element = document.createElement('div')
      const service = new window.google.maps.places.PlacesService(element)
      
      service.getDetails(
        {
          placeId: placeId,
          fields: ['reviews', 'rating'],
        },
        (place: any, status: any) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
            const mappedReviews: Review[] = place.reviews.map((review: any) => {
              // Extract first sentence as a pull quote
              const firstSentence = review.text
                ? review.text.split(/[.!?]/)[0].trim()
                : 'Excellent Academy!'
              
              return {
                author: review.author_name,
                text: review.text || '',
                rating: review.rating || 5,
                avatar: review.profile_photo_url || '',
                specialty: review.relative_time_description || 'Google Review',
                pullQuote: firstSentence.length > 50 
                  ? `${firstSentence.substring(0, 50)}...` 
                  : firstSentence || 'Incredible experience',
              }
            })
            resolve(mappedReviews)
          } else {
            reject(new Error(`PlacesService failed with status: ${status}`))
          }
        }
      )
    } catch (err) {
      reject(err)
    }
  })
}
