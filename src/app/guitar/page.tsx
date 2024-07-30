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

        <h1 className="text-lg md:text-3xl text-center font-sans font-bold mb-1 text-white">Guitar</h1>

        <div className="flex flex-wrap justify-center">

            <p className="text-base font-normal text-balance text-center mt-5">
                Starting your guitar journey? This course is for you! We&apos;ll learn all the basic skills and build the muscles you need 
                to play the guitar with confidence. By the end of Basic, you&apos;ll know how to play the eight essential open chords, 
                the most common strumming patterns, and loads of great songs!
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
                        <td>Guitar Basics</td>
                        <td>6</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>A & D Chords</td>
                        <td>13</td>
                        <td>$700</td>
                    </tr>
                    <tr>
                        <td>Rhythm & Chord</td>
                        <td>9</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Capo, Minor Chords & Up Strums</td>
                        <td>12</td>
                        <td>$1500</td>
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