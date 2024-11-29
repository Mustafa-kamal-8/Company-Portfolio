import CountUp from 'react-countup';

const Counter = () => {
    return (
        <>
            <div className='bg-gray-200 text-red p-10  flex justify-center items-center'>
                <div className='container grid grid-cols-1 md:grid-cols-2 gap-20'>
                    {/* First Counter */}
                    <div className='flex flex-col justify-center items-center'>
                        <p className=' text-4xl md:text-7xl font-semibold text-red-500 '>
                            <CountUp
                                end={11}
                                duration={3}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                separator=','
                                suffix='+'
                            />
                        </p>
                        <p className='text-2xl md:text-3xl font-semibold text-gray-800'>
                            Years in business and counting
                        </p>
                    </div>

                    {/* Second Counter */}
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-4xl md:text-7xl font-semibold text-red-500'>
                            <CountUp
                                end={77}
                                duration={3}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                separator=','
                                suffix='+'
                            />
                        </p>
                        <p className='text-2xl md:text-3xl font-semibold text-gray-800'>
                            Total Projects
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counter;
