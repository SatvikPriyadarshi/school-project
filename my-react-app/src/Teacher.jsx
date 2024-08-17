import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { GiTeacher } from "react-icons/gi";

const teachers = [
    {
        image: './photo/teacher-1.jpg',
        name: 'Rahul Singh',
        qualification: 'Lorem ipsum dolor sit amet consectetur .'
    },
    {
        image: './photo/teacher-2.jpg',
        name: 'Dharmanshu Kumar',
        qualification: 'Lorem ipsum dolor sit amet consectetur .'
    },
    {
        image: './photo/teacher-3.jpg',
        name: 'Prateek Singh',
        qualification: 'Lorem ipsum dolor sit amet consectetur .'
    },
    {
        image: './photo/teacher-4.jpg',
        name: 'Nikhil Garg',
        qualification: 'Lorem ipsum dolor sit amet consectetur .'
    },
    {
        image: './photo/teacher-5.jpg',
        name: 'Abhiman Singh',
        qualification: 'Lorem ipsum dolor sit amet consectetur .'
    },
    {
        image: './photo/teacher-6.jpg',
        name: 'Kundan Kumar',
        qualification: 'Lorem ipsum dolor sit amet consectetur .'
    },
    {
        image: './photo/teacher-7.jpg',
        name: 'Vishal Soni',
        qualification: 'Lorem ipsum dolor sit amet consectetur .'
    },
    {
        image: './photo/teacher-8.jpg',
        name: 'Ujjwal Sharma',
        qualification: 'Lorem ipsum dolor sit amet consectetur .'
    },
    {
        image: './photo/teacher-9.jpg',
        name: 'Naman Tak',
        qualification: 'Lorem ipsum dolor sit amet consectetur .'
    },
    {
        image: './photo/teacher-10.jpg',
        name: 'Anshika Sharma',
        qualification: 'Lorem ipsum dolor sit amet consectetur .'
    },


]

const Teacher = ()=>{
    return(
        <div> 
            <Navbar/>
            <div>
                <header style={{
                    height :280,
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
                    backgroundBlendMode:' multiply,multiply',
                    display : 'flex',
                    justifyContent:"center",
                    alignItems : "center"
                }}>
                    <h1 style={{
                        fontSize: 60,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center'
                    }}><GiTeacher style={{marginRight :3}} />
                        Teachers</h1>
                </header>

                <section style={{ 
                    width: '80%',
                    margin:'0 auto',
                    padding :'80px 0',
                    display: 'flex',
                    columnGap: '5%',
                    rowGap : 48,
                    flexWrap : 'wrap'
                }}>
                    {
                        teachers.map((val,indx)=>{
                            return (
                                <div style={{width:'21%' ,boxShadow:'0 8px 8px 0 rgba(0,0,0,0.3)',borderRadius:4}} key ={indx}>
                                <img src={val.image} style={{width :'100%'}}/>
                                <h2 style={{padding :0, marginBottom:4}}>{val.name}</h2>
                                <p style={{padding:0,margin:0,color:'gray'}}>{val.qualification}</p>
                            </div>
                            )
                        })
                    }
                   
                </section>
            </div>
            <Footer/>
        </div>
    )
}
export default Teacher;