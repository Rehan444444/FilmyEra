import React from 'react'
import {Link} from 'react-router-dom'

const ShowAll1 = () => {
  return (
    <>
    <div className='flex justify-between  items-center flex-wrap  p-5 bg-gray-900 '>
           
   
           
           <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
              <Link to={'/AvengerInfinity'}><span> <img className='h-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/199925/AvengersInfinityWar-4K-1000x1000.jpg" alt="" />
               
               <h1 className='text-2xl p-1 
            hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Avengers Endgame</h1></span></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.5/5.0</h1>
              
               <h1 className='text-xl p-1  ' >Year:- 2019</h1>
           </div>
           <div className='hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
              <Link to={'/Strange'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" alt="" />
               </span>
               <h1 className='text-2xl p-1 
            hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Dr. Strange Multiverse</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2022</h1>
           </div>
           <div className=' hover:-translate-x-1md:mt-3 hover:translate-y-1'>
              <Link to={'/John'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBejmsN1tTboCGogzogDD7HkHZA376DRujetG2rx3JvCv2kuDupwhxAGS8cTinyMA_uM&usqp=CAU" alt="" />
               </span>
               <h1 className='text-2xl p-1 
            hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- John Wick Chapter-4</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2023</h1>
           </div>
           <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
              <Link to={'/Avatar2'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="" />
               </span>
               <h1 className='text-2xl p-1 
            hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:-Avatar 2 Way of Water</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.6/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2023</h1>
           </div>

       </div>
       <div className='flex justify-between bg-gray-900 items-center flex-wrap  p-5  '>
           
           <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
           <Link to={'/RRR'}><span> <img className= ' w-80 h-[20rem] hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg" alt="" />
                
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- RRR</h1></span></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.5/5.0</h1>
              
               <h1 className='text-xl p-1  ' >Year:- 2022</h1>
           </div>
           <div className='hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
           <Link to={'/Topgun'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81BtU9dQIJL._SL1500_.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Top Gun Maverik</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2022</h1>
           </div>
           <div className=' hover:-translate-x-1md:mt-3 hover:translate-y-1'>
           <Link to={'/Thor'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Thor: Love and Thunder</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2023</h1>
           </div>
           <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
           <Link to={'/Wakanda'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Wakanda Forever</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.6/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2023</h1>
           </div>

       </div>

       <div className='flex justify-between bg-gray-900 items-center flex-wrap  p-5  '>
           
           <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
           <Link to={'/AvengerInfinity'}><span> <img className='h-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/199925/AvengersInfinityWar-4K-1000x1000.jpg" alt="" />
                
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Avengers Endgame</h1></span></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.5/5.0</h1>
              
               <h1 className='text-xl p-1  ' >Year:- 2019</h1>
           </div>
           <div className='hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
           <Link to={'/Strange'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Dr. Strange Multiverse</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2022</h1>
           </div>
           <div className=' hover:-translate-x-1md:mt-3 hover:translate-y-1'>
           <Link to={'/John'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBejmsN1tTboCGogzogDD7HkHZA376DRujetG2rx3JvCv2kuDupwhxAGS8cTinyMA_uM&usqp=CAU" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- John Wick Chapter-4</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2023</h1>
           </div>
           <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
           <Link to={'/Avatar2'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:-Avatar 2 Way of Water</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.6/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2023</h1>
           </div>

       </div>

       <div className='flex justify-between bg-gray-900 items-center flex-wrap  p-5  '>
           
           <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
           <Link to={'/AvengerInfinity'}><span> <img className='h-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/199925/AvengersInfinityWar-4K-1000x1000.jpg" alt="" />
                
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Avengers Endgame</h1></span></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.5/5.0</h1>
              
               <h1 className='text-xl p-1  ' >Year:- 2019</h1>
           </div>
           <div className='hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
           <Link to={'/Strange'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Dr. Strange Multiverse</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2022</h1>
           </div>
           <div className=' hover:-translate-x-1md:mt-3 hover:translate-y-1'>
           <Link to={'/John'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBejmsN1tTboCGogzogDD7HkHZA376DRujetG2rx3JvCv2kuDupwhxAGS8cTinyMA_uM&usqp=CAU" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- John Wick Chapter-4</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2023</h1>
           </div>
           <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
           <Link to={'/Avatar2'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:-Avatar 2 Way of Water</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.6/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2023</h1>
           </div>

       </div>

       <div className='flex   p-5 bg-gray-900 '>
           
           <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
           <Link to={'/AvengerInfinity'}><span> <img className='h-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/199925/AvengersInfinityWar-4K-1000x1000.jpg" alt="" />
                
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Avengers Endgame</h1></span></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.5/5.0</h1>
              
               <h1 className='text-xl p-1  ' >Year:- 2019</h1>
           </div>
           <div className='hover:-translate-x-1 md:mt-3 hover:translate-y-1 mx-16'>
           <Link to={'/Strange'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Dr. Strange Multiverse</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2022</h1>
           </div>
           

       </div>
      
    
    
    </>
  )
}

export default ShowAll1
