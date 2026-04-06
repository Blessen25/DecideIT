import Container from '../layout';
import './home.css';

export const Home = () => {

    return(

        <>
           <Container layout_class='main_layout_cstm'>
                <>
                    <div className="d-flex gap-resp">
                        <div className="firstdiv-home">
                            <h1 className='h1'>Decide together, wherever you are</h1>
                            <p className='body-text fw-600'>Whether you're choosing where to eat, what to play, or planning your next trip, DecideIT helps you create polls and make decisions with your friends instantly.</p>
                        </div>
                        <div className="seconddiv-home">
                            <h1>Decide together, wherever you are</h1>
                            <p>Whether you're choosing where to eat, what to play, or planning your next trip, DecideIT helps you create polls and make decisions with your friends instantly.</p>
                        </div>
                    </div>
                </>
           </Container>
        </>
    )
}