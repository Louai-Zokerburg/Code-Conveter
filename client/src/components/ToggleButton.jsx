function ToggleButton({ isDark }) {
  return (
    <label className='flex items-center cursor-pointer'>
      <div className='relative'>
        <input type='checkbox' className='sr-only' checked={isDark} />
        <div className='w-10 flex items-center h-4 bg-gray-400 rounded-full'>
          <div
            className={`absolute w-6 h-6 transition duration-300 ease-in-out rounded-full transform ${
              isDark ? 'translate-x-full bg-green-500' : 'bg-gray-200'
            }`}
          ></div>
        </div>
      </div>
    </label>
  );
}

export default ToggleButton;
