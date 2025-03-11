'use client';
import React from "react";
import { Button } from "./button";

interface GridLayoutProps {
    items: string[];
    onSelect?: (item: string) => void;
}
export default function GridLayout({ items }: GridLayoutProps) {
    const [selectedIndices, setSelectedIndices] = React.useState<number[]>([]);

    const toggleSelection = (index: number) => {
        setSelectedIndices(prev =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="grid grid-cols-3 gap-4">
            {items.map((item, index) => (
                <Button
                    key={index}
                    onClick={() => toggleSelection(index)}
                    className={
                        selectedIndices.includes(index)
                            ? "border-2 border-blue-500"
                            : ""
                    }
                >
                    {item}
                </Button>
            ))}
        </div>
    );
}
