export const AudioPlayer = ({audioFile}) => {
    return (
        <audio controls>
            <source src={audioFile} type="audio/mp3" />
        </audio>
    )
}