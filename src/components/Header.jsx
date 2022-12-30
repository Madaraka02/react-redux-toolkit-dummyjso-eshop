import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '../features/products/productsApiSlice';
import { CATEGORY_PREFIX, MAIN_HOMEPAGE, PRODUCT_PREFIX, SEARCH_PREFIX, SEARCH_RESULTS_PAGE } from '../routes';

function Header() {
    const navigate = useNavigate()
  const [navbar, setNavbar] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const { data: categories, isLoading, isSuccess, isError, error } = useGetCategoriesQuery()


  const handleSearchParts = (e) => {
    e.preventDefault()
    const searchQuery = e.target.searchParts.value
    if (searchQuery && searchQuery.trim()) {
    //   dispatch(setSearchTags(searchQuery))
      navigate(`${SEARCH_RESULTS_PAGE}?q=${searchQuery}`);
    }
  }

  console.log(categories)

  return (
    <>
    <div className='container-fluid sticky top-0 z-50 bg-white drop-shadow-xl'>

      <nav className='container flex flex-wrap justify-between items-center mx-auto '>
        <Link to={MAIN_HOMEPAGE} className='flex items-center p-3'>
          <img src='' className='mr-3 h-6 sm:h-9' alt='Logo' />
          {/* <span className="self-center text-xl font-semibold whitespace-nowrap main-cr-1">SparePap</span> */}
        </Link>
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none "
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
              
            )}
          </button>
        </div>
        <div className={`w-full md:block md:w-auto grow ${navbar ? "" : "hidden"}`} id='navbar-default'>
          <ul className='flex flex-col gap-2 p-4 mt-4 md:flex-row md:items-center md:justify-end md:space-x-0 md:mt-0 md:text-sm md:font-medium md:border-0 '>
            <li className={`relative grow `}>
              <div className='w-full relative items-center'>
                <form
                  className='flex flex-row w-full rounded-md p-2 border-slate-800 border '
                  onSubmit={handleSearchParts}
                  >
                  <input type="text"
                    name="searchParts"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full placeholder:italic font-satoshi outline-none font-normal placeholder:text-xs'
                    placeholder='Search product...'
                  />
                  <button type="submit" className=" rounded-md">
                    <svg
                      className='h-5 text-slate-800' viewBox='0 0 24 24' fill='none' stroke='currentColor'
                      strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
                    ><circle
                        cx='11'
                        cy='11'
                        r='8'
                      /><line
                        x1='21' y1='21' x2='16.65' y2='16.65'
                      />
                    </svg>

                  </button>
                </form>

              </div>
            </li>
            <li
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}

             className={`relative flex`}>
              <button
                id='productDropdown' data-dropdown-toggle='dropdown'
                className='font-semibold text-[16px] px-3 py-1 text-center inline-flex items-center font-roboto'
                type='button'
              >
                Categories
              </button>

            </li>
            <li className={`relative  `}>
              <button
                id='productDropdown' data-dropdown-toggle='dropdown'
                className='font-semibold text-[16px] px-3 py-1 text-center inline-flex items-center font-roboto'
                type='button'
              >
                Account
              </button>
            </li>
            <li className={`relative `}>
              <button
                id='productDropdown' data-dropdown-toggle='dropdown'
                className='font-semibold relative text-[16px] px-3 py-1 text-center inline-flex items-center font-roboto'
                type='button'
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p className='absolute top-0 right-0 '>100</p>

              </button>
            </li>
            {showCategories && 
              <div 
              onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
              className={` ${showCategories? '': 'hidden'} flex md:grid flex-col md:grid-cols-5 absolute bg-white rounded-md shadow-md top-12 md:top-20 p-2 w-[92%] md:w-[40%] `}>
                <div className="flex flex-col gap-2">
                    {categories?.slice(0,4).map((category, index) => (
                        <Link to={`${CATEGORY_PREFIX}${category}`}>

                            <p key={index} className='cursor-pointer text-slate-800 font-roboto text-[16px] capitalize px-2 py-2 hover:bg-gray-200 rounded-md'>{category}</p>
                        </Link>
                    ))}
                    
                </div>
                <div className="flex flex-col gap-2">
                {categories?.slice(4,8).map((category, index) => (
                    <Link to={`${CATEGORY_PREFIX}${category}`}>

                        <p key={index} className='cursor-pointer text-slate-800 font-roboto text-[16px] capitalize px-2 py-2 hover:bg-gray-200 rounded-md'>{category}</p>
                    </Link>
                    ))}

                </div>
                <div className="flex flex-col gap-2">
                {categories?.slice(8,12).map((category, index) => (
                    <Link to={`${CATEGORY_PREFIX}${category}`}>

                        <p key={index} className='cursor-pointer text-slate-800 font-roboto text-[16px] capitalize px-2 py-2 hover:bg-gray-200 rounded-md'>{category}</p>
                    </Link>
                    ))}

                </div>
                <div className="flex flex-col gap-2">
                {categories?.slice(12,16).map((category, index) => (
                    <Link to={`${CATEGORY_PREFIX}${category}`}>

                        <p key={index} className='cursor-pointer text-slate-800 font-roboto text-[16px] capitalize px-2 py-2 hover:bg-gray-200 rounded-md'>{category}</p>
                    </Link>
                    ))}

                </div>
                <div className="flex flex-col gap-2">
                {categories?.slice(16, categories.length).map((category, index) => (
                    <Link to={`${CATEGORY_PREFIX}${category}`}>

                        <p key={index} className='cursor-pointer text-slate-800 font-roboto text-[16px] capitalize px-2 py-2 hover:bg-gray-200 rounded-md'>{category}</p>
                    </Link>
                    ))}

                </div>

              </div>
              }
          </ul>
        </div>

      </nav>
    </div>
    </>
  )
}

export default Header