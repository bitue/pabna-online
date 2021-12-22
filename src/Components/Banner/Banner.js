import React from 'react';


const Banner = () => {
    return (
      <>
         <div className='grid grid-cols-2 space-x-3 p-3'>
             <div>
                 <img className='rounded-2xl' src= 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80'/>
             </div>
             <div>
                <h1 className='font-semibold text-red-500 text-2xl '>
                  About Pabna Online
                </h1>
                <p className='p-5'>
                The future of ecommerce is incredibly bright. But, learning how to start an ecommerce business is intimidating. It requires hard work and demands many steps and decisions that need to come together at the right time.

                To help, weve put together a comprehensive blueprint on the best way to start an ecommerce business, compiled from Shopify s best content. These blog posts, guides, and videos have been organized based on the most important tasks you ll face when researching, launching, and growing a profitable ecommerce business.
                </p>
             </div>
         </div>
        
      </>
    
    );
};

export default Banner;