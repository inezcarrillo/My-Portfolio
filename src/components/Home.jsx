import image from './image.jpeg';

export default function Home() {
    return (
        <div>
            <h1>Hi there!</h1>
            <p>
                Welcome to my portfolio!
            </p>
            <img src={image} alt="Image" /> {/* Inserting the image */}
        </div>
    )
}