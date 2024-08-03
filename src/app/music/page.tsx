'use client';

import Link from 'next/link'
import { Button } from "@/components/ui/moving-border"
import { Spotlight } from '@/components/ui/Spotlight'

function Guitar() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 w-full text-center">
        
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="blue"
        />

        <h1 className="text-lg md:text-3xl text-center font-sans font-bold mb-1 text-white">Music Production Fundamentals</h1>

        <div className="flex flex-wrap justify-center">

            <p className="text-base font-normal text-balance text-center mt-5">
                Starting your music production fundamentals journey? This course is for you! We&apos;ll learn all the basic skills and build the muscles you need 
                to play the music production fundamentals with confidence.
            </p>
            <p className="text-base font-normal text-balance text-center mt-3">
                Music production is an umbrella term. Whether it’s songwriting, arranging, recording, mixing, mastering or anything in between, 
                it can probably be described as music production. Put simply, it’s the entire process, from start to finish, of making recorded 
                music. The different elements of music production rely not only on skills and knowledge but on specific hardware and software. 
                So, the first step is to consider what gear you’re going to need.
            </p>
        </div>

        <h1 className="text-lg md:text-3xl text-center font-sans font-bold mb-1 text-white mt-6">Course Outline</h1>
        
        <div className="flex flex-wrap justify-center">

            <table className="table-auto mt-6">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Lesson</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Writing</td>
                        <td>6</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>Session setup</td>
                        <td>13</td>
                        <td>$700</td>
                    </tr>
                    <tr>
                        <td>Tempo and key</td>
                        <td>13</td>
                        <td>$1500</td>
                    </tr>
                    <tr>
                        <td>Audio settings</td>
                        <td>13</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>MIDI</td>
                        <td>13</td>
                        <td>$1000</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="mt-6">
            <Link href={"/courses"}>
                <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                    Explore Courses
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default Guitar