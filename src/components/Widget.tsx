import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export function Widget() {
  return (
    <Popover className='absolute bottom-5 right-5'>
      <Popover.Panel>Hello World</Popover.Panel>

      <Popover.Button className='bg-brand-500 h-12 px-3 rounded-full text-white flex items-center group'>
        <ChatTeardropDots className='h-6 w-6' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
