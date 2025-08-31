"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

interface VideoItem {
  id: string
  title: string
  description: string
  embedUrl: string
  thumbnail: string
}

const VideoPlayerSection = () => {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const videos: VideoItem[] = [
    {
      id: "overview",
      title: "Overview",
      description:
        "Welcome to SmartResume, the world's first certified talent network bringing together job seekers, employers, and certifying institutions.",
      embedUrl: "https://player.vimeo.com/video/780533715?h=26391c162d",
      thumbnail: "/smartresume-overview-video-thumbnail.png",
    },
    {
      id: "jobseekers",
      title: "Job seekers",
      description:
        "A SmartResume can certify accomplishments, store powerful data, and make you discoverable for your skills.",
      embedUrl: "https://player.vimeo.com/video/783013462?h=585793cc2c",
      thumbnail: "/job-seekers-using-smartresume-platform.png",
    },
    {
      id: "employers",
      title: "Employers",
      description:
        "Discover talent based on skill, verify credentials in real time, and hire based on qualifications not first impressions.",
      embedUrl: "https://player.vimeo.com/video/783013294?h=51fa4a5d7c",
      thumbnail: "/employers-discovering-talent-on-smartresume.png",
    },
  ]

  const handleVideoSelect = (index: number) => {
    setActiveVideo(index)
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="video-section" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-video relative">
                {!isPlaying ? (
                  <div className="relative w-full h-full">
                    <img
                      src={videos[activeVideo].thumbnail || "/placeholder.svg"}
                      alt={videos[activeVideo].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Button
                        size="lg"
                        onClick={togglePlayPause}
                        className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary text-white shadow-2xl"
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full">
                    <iframe
                      src={`${videos[activeVideo].embedUrl}&autoplay=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={videos[activeVideo].title}
                    />
                    <Button
                      size="sm"
                      onClick={togglePlayPause}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                    >
                      <Pause className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Video List */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-foreground font-space-grotesk mb-4">See SmartResume in Action</h2>
              <p className="text-muted-foreground font-dm-sans">
                Discover how our platform transforms the way credentials are shared and verified.
              </p>
            </div>

            <div className="space-y-4">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  onClick={() => handleVideoSelect(index)}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeVideo === index
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card hover:bg-muted border border-border hover:shadow-md"
                  }`}
                >
                  {/* Active indicator */}
                  {activeVideo === index && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-primary-foreground rounded-r-full"></div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      {activeVideo === index && isPlaying && (
                        <div className="w-6 h-6 flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                        </div>
                      )}
                      <h3
                        className={`text-lg font-semibold font-space-grotesk ${
                          activeVideo === index ? "text-primary-foreground" : "text-foreground"
                        }`}
                      >
                        {video.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm leading-relaxed font-dm-sans ${
                        activeVideo === index ? "text-primary-foreground/90" : "text-muted-foreground"
                      }`}
                    >
                      {video.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                      activeVideo === index ? "opacity-0" : "opacity-0 hover:opacity-5 bg-primary"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="pt-6 border-t border-border">
              <Button variant="outline" className="w-full bg-transparent">
                View All Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoPlayerSection
