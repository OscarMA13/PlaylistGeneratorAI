"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import GridLayout from "@/components/ui/gridlayout";
import { Input } from "@/components/ui/input";

export default function Information() {
    const [genres, setGenres] = useState<string[]>([]);
    const [artists, setArtists] = useState<string[]>([]);
    const [question, setQuestion] = useState<string>(""); // Allow questions with or without genres/artists

    // Handle user input
    const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGenres(event.target.value.split(",").map((g) => g.trim()));
    };

    const handleArtistChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArtists(event.target.value.split(",").map((a) => a.trim()));
    };

    const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(event.target.value);
    };

    // Handle selection from GridLayout (if applicable)
    const handleGenreSelect = (genre: string) => {
        setGenres((prev) => [...new Set([...prev, genre])]); // Avoid duplicates
    };

    const handleArtistSelect = (artist: string) => {
        setArtists((prev) => [...new Set([...prev, artist])]);
    };

    // Send request with or without genres/artists
    const handleFinish = async () => {
        const data = { genres, artists, question };

        try {
            const response = await fetch("/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-5 bg-gradient-to-b from-black to-green-800 text-white">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="grid grid-rows-[1fr_auto] justify-center items-center max-w-full gap-8 sm:gap-16">
                        <div className="text-2xl sm:text-4xl font-semibold text-center gap-5 grid grid-rows-2">
                            Ask a Question (Optional)
                            <Input value={question} onChange={handleQuestionChange} placeholder="Type your question..." />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="grid grid-rows-[1fr_auto] justify-center items-center max-w-full gap-8 sm:gap-16">
                        <div className="text-2xl sm:text-4xl font-semibold text-center gap-5 grid grid-rows-2">
                            Select Genres (Optional)
                            <Input value={genres.join(", ")} onChange={handleGenreChange} placeholder="Enter genres..." />
                        </div>
                        <GridLayout
                            items={["Pop", "K-Pop", "R&B", "Hip-Hop/Rap", "Electronic (EDM)", "Jazz", "Classical", "Country", "Reggae", "Latin", "Metal", "Hyper-Pop"]}
                            onSelect={handleGenreSelect}
                        />
                    </CarouselItem>

                    <CarouselItem className="grid grid-rows-[1fr_auto] justify-center items-center max-w-full gap-8 sm:gap-16">
                        <div className="text-2xl sm:text-4xl font-semibold text-center gap-5 grid grid-rows-2">
                            Select Your Artists (Optional)
                            <Input value={artists.join(", ")} onChange={handleArtistChange} placeholder="Enter artists..." />
                        </div>
                        <GridLayout
                            items={["Bruno Mars", "The Weeknd", "Lady Gaga", "Kendrick Lamar", "Billie Eilish", "SZA", "Coldplay", "Bad Bunny", "Rihanna", "Taylor Swift", "Ariana Grande", "Justin Bieber"]}
                            onSelect={handleArtistSelect}
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Button className="font-semibold" onClick={handleFinish}>
                Submit
            </Button>
        </div>
    );
}
