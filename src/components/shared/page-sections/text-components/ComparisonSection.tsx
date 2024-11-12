const ComparisonSection = () => {
  return (
    <div className='flex h-[80vh] flex-row px-20 py-10'>
      <div className='bg-dkbg3 z-10 h-full w-1/2 rounded-2xl bg-neutral-6 p-10 shadow-lg'>
        <h3 className='text-center'>Our Competitors</h3>
        <ul className='m-10 leading-10'>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className='bg-ltbg3 text-black font-bold z-20 flex h-5/6 w-1/2 flex-col self-center rounded-e-2xl bg-neutral-7 p-10 shadow-xl'>
        <h3 className='text-center'>Our Company</h3>
        <ul className='m-10 leading-10'>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default ComparisonSection;
