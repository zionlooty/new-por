import { useEffect, useState } from "react"

export const StarBackground = () => {
  const [stars, setStars] = useState([])
  const [meteors, setMeteors] = useState([])

  useEffect(() => {
    generateStars()
    generateMeteors()
  }, [])

  const generateStars = () => {
    const numberofStars = Math.floor(window.innerWidth * window.innerHeight / 5000)
    const newStars = []

    for (let i = 0; i < numberofStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        AnimationDuration: Math.random() * 4 + 2,
      })
    }
    setStars(newStars)
  }

  const generateMeteors = () => {
    const numberofMeteors = 4
    const newMeteors = []

    for (let i = 0; i < numberofMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 2,
        AnimationDuration: Math.random() * 3 + 2,
      })
    }
    setMeteors(newMeteors)
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.AnimationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.AnimationDuration}s`,
          }}
        />
      ))}
    </div>
  )
}
