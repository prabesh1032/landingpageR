import React from 'react'

const PricingSection = () => {
    const [productCount, setProductCount] = React.useState(0);
    const starterPrice = Math.round(4000 * (productCount / 50))
    const businessPrice = Math.round(7500 * (productCount / 50))


    return (
        <section className='py-20  ml-40 px-4'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>Pricing</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                    {/* starter plan */}
                    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 md:mb-0'>
                        <h3 className='text-xl text-gray-600 mb-4'>Starter</h3>
                        <p className='text-3xl font-bold'>${starterPrice}</p>
                    </div>
                    {/* business plan */}
                    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 md:mb-0'>
                        <h3 className='text-xl text-gray-600 mb-4'>Business</h3>
                        <p className='text-3xl font-bold'>${businessPrice}</p>
                    </div>
                </div>
                <div className='max-w-md mx-auto'>
                    <p className='text-center font-semibold text-gray-600mb-4'>{productCount} products</p>
                    <div className='relative px-4 '>
                        <div className='flex items-center justify-center gap-2 '>
                            <span className='text-xs font-bold sm:text-sm text-gray-600'>1</span>
                            <input className='flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
                                type="range" min='1' max='50' value={productCount}
                                onChange={(e) => setProductCount(parseInt(e.target.value))} />
                            <span className='text-xs font-bold sm:text-sm text-gray-600'>50</span>
                        </div>
                    </div>
                    <div className='text-center mt-8'>
                        <p className='text-xl font-semibold text-center mt-8 text-gray-800'>Ready To Get Started</p>
                        <button className='bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700 transition-colors cursor-pointer'>
                            Get Started</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PricingSection