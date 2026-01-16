import { Transition } from '@headlessui/react'
import { useState } from 'react'

const UserProfile = () => {
    const [isShowing, setIsShowing] = useState(false)
    return (
        <div className='bg-white flex justify-items-center self-center h-52 m-50 relative'>
            <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        I will fade in and out
      </Transition>
        </div>
    )
}

export default UserProfile
