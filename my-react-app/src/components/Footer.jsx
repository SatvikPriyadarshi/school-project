import { Link } from "react-router-dom";
import { AiFillYoutube, AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = ()=>{

    return (
        <>
        <footer style={{
            background : '#280044',
           padding :'80px 10%',
           display: 'flex',
           flexWrap: 'wrap',
           justifyContent: 'space-between'
        }}>
            <div style={{width :'22%'}}>
                <h2 style={{color:'white', 
                    fontWeight :'600',
                    margin:'0'
                    }}>VKV</h2>
                <p style={{color:'#ccc',}}>Lorem ipsum sectetur nemo corporis, excepturi aspernatur veniam, dolores labore accusamus, at delectus! Distinctio laudantium labore dignissimos.</p>

            </div>

            <div style={{width :'22%'}}>
                <h2 style={{color:'white', 
                    fontWeight :'600',
                    margin:'0'
                    }}>Popular Links</h2>
                <ul style={{
                    padding :0,
                    display:'flex',
                    flexDirection:'column',
                    gap : 10,
                    listStyle :'none',
                }}>
                    <li>
                        <Link  to = "/" style={{
                            color: 'white',
                            textDecorationLine:'none'
                        }}>Home</Link>
                    </li>

                    <li>
                        <Link  to = "/teachers" style={{
                            color: 'white',
                            textDecorationLine:'none'
                        }}>Teachers</Link>
                    </li>

                    <li>
                        <Link  to = "/holidays" style={{
                            color: 'white',
                            textDecorationLine:'none'
                        }}>Holidays</Link>
                    </li>

                    <li>
                        <Link  to = "/contact-us" style={{
                            color: 'white',
                            textDecorationLine:'none'
                        }}>Contact Us</Link>
                    </li>
                </ul>

            </div>

            <div style={{width :'22%'}}>
                <h2 style={{color:'white', 
                    fontWeight :'600',
                    margin:'0'
                    }}>Social Profile</h2>
                <ul style={{
                    padding :0,
                    display:'flex',
                    flexDirection:'column',
                    gap : 10,
                    listStyle :'none',
                }}>
                    <li>
                        <Link  to = "/" style={{
                            color: 'white',
                            textDecorationLine:'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <AiFillYoutube style={{marginRight :4}}/>
                        YouTube</Link>
                    </li>

                    <li>
                        <Link  to = "/" style={{
                            color: 'white',
                            textDecorationLine:'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <AiOutlineInstagram style={{marginRight :4}}/>
                        Instagram</Link>
                    </li>

                    <li>
                        <Link  to = "/" style={{
                            color: 'white',
                            textDecorationLine:'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <AiFillLinkedin style={{marginRight :4}}/>
                        LinkedIn</Link>
                    </li>

                    <li>
                        <Link  to = "/" style={{
                            color: 'white',
                            textDecorationLine:'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <AiFillGithub style={{marginRight :4}}/>
                        GitHub</Link>
                    </li>
                </ul>

            </div>

            <div style={{width :'22%'}}>
                <h2 style={{color:'white', 
                    fontWeight :'600',
                    margin:'0'
                    }}>Contact Us</h2>
                <form style = {{
                    display : 'flex',
                    flexDirection: 'column',
                    gap:16,
                    marginTop: 18

                }}>
                    <input 
                    required
                    name = "fullname"
                    placeholder = "Enter Your Name"
                    type = "text"
                    aria-label="Full Name"
                    style = {{
                        border: 'none',
                        padding:12,
                        borderRadius : 4,
                        width : '100%',
                        backgroundColor: '#fff'

                    }}
                    />

                    <input 
                    required
                    name = "email"
                    placeholder = "example@gmail.com"
                    type = "email"
                    aria-label="Email"
                    style = {{
                        border: 'none',
                        padding:12,
                        borderRadius : 4,
                        width : '100%',
                        backgroundColor: '#fff'
                    }}
                    />

                    <textarea 
                    required
                    name = "message"
                    placeholder = "Submit your message"
                    aria-label="Message"
                    style = {{
                        border: 'none',
                        padding:12,
                        borderRadius : 4,
                        width : '100%',
                        backgroundColor: '#fff'
                    }}
                    rows="4"
                    >
                    </textarea>      
                    <button style={{
                        border :'none',
                        padding: '12px 24px',
                        borderRadius: 4,
                        width : 'fit-content',
                        background : '#f38e1e',
                        color : 'white'
                    }}>Submit</button>

                </form>
            </div>

        </footer>
        </>
    )
}

export default Footer;
