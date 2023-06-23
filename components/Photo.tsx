
import { useState, useEffect , useReducer } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Photo() {
  const slides = [
    {
      url: 'https://scontent.fdel11-3.fna.fbcdn.net/v/t31.18172-8/13064722_183641325366094_6007866617025377312_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=05277f&efg=eyJpIjoidCJ9&_nc_ohc=xx49AuyUTtQAX_8cHEl&_nc_ht=scontent.fdel11-3.fna&oh=00_AfCXn8LeT_8M3tmleV_Whot3MpgzRLVImagKS_bi9nY5Hg&oe=64BC1C84',
    },
    {
      url: 'https://scontent.fdel11-4.fna.fbcdn.net/v/t31.18172-8/820888_446154805450277_2025148277_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e007fa&efg=eyJpIjoidCJ9&_nc_ohc=gWKvSlzqN3gAX_3Lndl&_nc_ht=scontent.fdel11-4.fna&oh=00_AfDhXcWpOHqHANbLBXo__aNAmY435-fyiKgVUzcBb6-25A&oe=64BCB583',
    },
    {
      url: 'https://scontent.fdel11-3.fna.fbcdn.net/v/t1.6435-9/83938941_622825308451599_4460291101302980608_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_ohc=5kRXD8eMyQEAX-qnMlo&_nc_ht=scontent.fdel11-3.fna&oh=00_AfB73dYlWaxLNkmZdsMBUUYBEFzxwpR1nsTwHZbRUtsFLw&oe=64BC8F19',
    },
    {
      url: 'https://scontent.fdel11-2.fna.fbcdn.net/v/t1.18169-9/309779_442901679108923_1322718656_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=210fed&efg=eyJpIjoidCJ9&_nc_ohc=H1CVW55pAMMAX8uQBiG&_nc_ht=scontent.fdel11-2.fna&oh=00_AfDtYFD8T6xTXwFUPivOnZyWnaYh9lYsQiN8Ys_DxEISGg&oe=64BCA6CA',
    },
    {
      url: 'https://scontent.fdel11-3.fna.fbcdn.net/v/t1.6435-9/54520237_2105715819494159_6296051292884172800_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=110474&efg=eyJpIjoidCJ9&_nc_ohc=rRgUHE7CFkoAX_8SZa5&_nc_ht=scontent.fdel11-3.fna&oh=00_AfASEnFU8QnybWghDR05bJfPB-6vR1zisOHtOuy_JXWSaQ&oe=64BCBAED',
    },
    {
      url: 'https://scontent.fdel11-3.fna.fbcdn.net/v/t1.6435-9/53198223_10214709465109641_1518904365207781376_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=110474&efg=eyJpIjoidCJ9&_nc_ohc=bg_Iw0lkNbEAX-uV3Op&_nc_ht=scontent.fdel11-3.fna&oh=00_AfCEB5nGmMw5axCGFQTqteE_DBWdNKhG6dK0z4bJaiQz5A&oe=64BCAF1C',
    },
    {
      url: 'https://scontent.fdel11-3.fna.fbcdn.net/v/t1.6435-9/36706505_10213079865210662_6063874534912557056_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=110474&efg=eyJpIjoidCJ9&_nc_ohc=tz6-ok6T3_AAX-RP-KN&_nc_ht=scontent.fdel11-3.fna&oh=00_AfD1VrdX421OrDP2Vgrj7cmJLbPTxzY7B4-bEOp4v6TfXQ&oe=64BCA65D',
    },
    {
      url: 'https://scontent.fdel11-2.fna.fbcdn.net/v/t1.18169-9/15826276_557852547741549_1961569659357115080_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=110474&efg=eyJpIjoidCJ9&_nc_ohc=7qOMGYuiTbkAX8APFbW&_nc_ht=scontent.fdel11-2.fna&oh=00_AfDKef2_xZW4OYf6cPj2hScX9embV7Rp0bbPiEyKubcMmA&oe=64BC9583',
    },
    {
      url: 'https://scontent.fdel11-4.fna.fbcdn.net/v/t31.18172-8/893221_473861942679563_1845656699_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e007fa&efg=eyJpIjoidCJ9&_nc_ohc=qucjEGHy6BAAX-qZDVp&_nc_ht=scontent.fdel11-4.fna&oh=00_AfBX1dLLZCtjzakHDQRrHVr82fOw8R96U-v3u2xg8Speig&oe=64BC9F71',
    },
    {
      url: 'https://scontent.fdel11-2.fna.fbcdn.net/v/t1.18169-9/154227_116222618443499_4291350_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e007fa&efg=eyJpIjoidCJ9&_nc_ohc=huq7WNUWGccAX-x1_B1&tn=6bzxXsfJVZ8SBQ0X&_nc_ht=scontent.fdel11-2.fna&oh=00_AfBvBmoLE19Bg3-si9tSfALiEh3zev0AG9fIdyLsgAMiWw&oe=64BCA27E',
    },
    {
      url: 'https://scontent.fdel11-3.fna.fbcdn.net/v/t1.18169-9/10013727_644349542297468_1756726477_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e007fa&efg=eyJpIjoidCJ9&_nc_ohc=F2vxu4JNukAAX98t1lC&_nc_ht=scontent.fdel11-3.fna&oh=00_AfC58Y_Wmeg7ruP14I_akgPo-9_IvnJQXu_qoNXb2O7zbA&oe=64BCB52C',
    },
  
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1100px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photo;