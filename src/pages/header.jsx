import React, { Fragment } from 'react'

function Header() {
  return (
    <Fragment>



      <header className="max-w-[1920px] mx-auto">
        <div className="container max-w-[1296px] mx-auto  ">
          <nav>
            <div className="nav_top flex justify-between pt-[40px]">
              <div className="logo w-[235px] h-[65px]"></div>
              <div className="sorce felx gap-[10px]">
                <div className="bir w-[306px] h-[48px]">
                  <h4 className="w-[163px] h-[20px] text-[#ffffff] font-Proxima Nova text-[14px] font-medium mt-[5px]">Быстрый поиск по сайту</h4>
                  <p className="w-[262px] h-[2px] bg-[#ffffff] mt-[30px]"></p>
                </div>
              </div>
              <div className="til flex gap-[10px] mt-[20px]">
                <a className="w-[19px] h-[22px] font-Proxima Nova text-[16px] font-medium text-[#ffffff]  " href="">Ru</a>
                <a className="w-[19px] h-[22px] font-Proxima Nova text-[16px] font-medium text-[#ffffff]  " href="">En</a>
              </div>
            </div>
            <ul className="flex justify-between w-[1294px] border-[1px] mt-[35px] ">
              <li className="font-Proxima Nova text-[16px] font-medium text-[#ffffff] mt-[20px] pb-[20px]"><a href="">О компании</a></li>
              <li className="font-Proxima Nova text-[16px] font-medium text-[#ffffff] mt-[20px] pb-[20px]"><a href="">Деятельность</a></li>
              <li className="font-Proxima Nova text-[16px] font-medium text-[#ffffff] mt-[20px] pb-[20px]"><a href="">Клиенту</a></li>
              <li className="font-Proxima Nova text-[16px] font-medium text-[#ffffff] mt-[20px] pb-[20px]"><a href="">Персонал</a></li>
              <li className="font-Proxima Nova text-[16px] font-medium text-[#ffffff] mt-[20px] pb-[20px]"><a href="">Акционеру и инвестору</a></li>
              <li className="font-Proxima Nova text-[16px] font-medium text-[#ffffff] mt-[20px] pb-[20px]"><a href="">Пресс-центр</a></li>
              <li className="font-Proxima Nova text-[16px] font-medium text-[#ffffff] mt-[20px] pb-[20px]"><a href="">Торги</a></li>
              <li className="font-Proxima Nova text-[16px] font-medium text-[#ffffff] mt-[20px] pb-[20px]"><a href="">Контакты</a></li>
            </ul>
          </nav>
          <div className="header_main flex justify-between mt-[150px] pb-[205px]">
            <div className="header_main_left">
              <h1 className='max-w-[636px] text-[40px] font-Proxima Nova font-bold text-[#FFFFFF]'>Quis et quam quam sem scelerisque odio. Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Nunc leo.</h1>
              <button className='w-[145px] h-[52px] border-2 text-[16px] font-Proxima Nova font-semibold text-[#ffffff] mt-[60px]'>Подробнее</button>
              <div className="p flex gap-[15px] mt-[60px]">
                <p className='w-[40px]  border-2 mt-[20px]'></p>
                <p className='w-[40px]  border-2 mt-[20px]'></p>
                <p className='w-[40px]  border-2 mt-[20px]'></p>
              </div>
            </div>
            <div className="header_main_right mt-[185px]">
              <h2 className='w-[162px] h-[56px] text-[#ffffff] font-Proxima Nova text-[40px] font-bold'>99,995%</h2>
              <p className='w-[226px] h-[44px] font-Proxima Nova text-[#ffffff] font-semibold text-[16px] mt-[120px] '>Nisi nulla ultrices amet cras tincidunt nec. Dolor magna.</p>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header