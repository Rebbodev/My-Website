import './Contacts.scss'
import discordPf from '../../assets/discord.png'
import myPf from '../../assets/me.png'



function Contact() {

    // const copy = (id: any) => {

    //     const element = document.getElementById(id)

    //     if (typeof (element?.textContent) === 'string') {
    //         navigator.clipboard.writeText(element?.textContent)
    //     }
    // }


    return (

        <div className='contacts'>
            <div className='contactbox' id='contact'>
                <div className='textboxes'>
                    <div className='contact-text'>
                        <p className='maintitle'>Contact Me</p>
                    </div>
                    <div className='contact-text'>
                        <p className='title'>Email:</p>
                        <a id='email' className='subtext' href='mailto:rebbodev@gmail.com' target='_blank' pop-text='click to go to mail'>
                            rebbodev@gmail.com
                        </a>
                        
                        
                    </div>
                    <div className='discord-button-sec'>
                        <a href="https://discord.gg/gettalkingtech"  className='test'>
                            <div className='contact-discord'>
                                <img src={discordPf} alt="discord.png" />
                                <p className='discord-text'>Discord</p>
                            </div>
                        </a>
                    </div>
                </div>
                <img src={myPf} alt="mypf.png" className='mypfp-contact' />
            </div>
        </div>
    )

}

export default Contact