import { Button } from "./button";

export default function GridLayout() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Button>Pop</Button>
            <Button>Rock</Button>
            <Button>Hip hop</Button>
            <Button>R&B</Button>
            <Button>Electronic dance music</Button>
            <Button>Country</Button>
            <Button>Latin</Button>
            <Button>Contemporary soul</Button>
            <Button>Jazz</Button>
            <Button>Classical music</Button>
            <Button>K-pop</Button>
            <Button>Electronic</Button>
        </div>
    );
}