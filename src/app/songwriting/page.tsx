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

        <h1 className="text-lg md:text-3xl text-center font-sans font-bold mb-1 text-white">Song Writing</h1>

        <div className="flex flex-wrap justify-center">

            <p className="text-base font-normal text-balance text-center mt-5"></p>
                Songwriting can be an overwhelming process…

            <p className="text-base font-normal text-balance text-center mt-5">
                Today, we’ll be unleashing the ultimate secrets to writing songs that resonate with listeners and top the charts.
                Whether you’re a seasoned songwriter or just starting your journey, this guide is your go-to resource for crafting 
                unforgettable tunes, writing melodies, creating lyrics, and everything in between.
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
                        <td>Explore Different Genres</td>
                        <td>3</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Use Prompts & Challenges</td>
                        <td>3</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>Developing a Song Structure</td>
                        <td>6</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>Writing Lyrics</td>
                        <td>7</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>Creating a Verse Melody</td>
                        <td>15</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Crafting a Chorus Melody</td>
                        <td>15</td>
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