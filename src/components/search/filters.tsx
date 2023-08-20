import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDrawer } from '@/components/drawer-views/context';
import Scrollbar from '@/components/ui/scrollbar';
import Button from '@/components/ui/button';
import { NormalGridIcon } from '@/components/icons/normal-grid';
import { CompactGridIcon } from '@/components/icons/compact-grid';
import { Close } from '@/components/icons/close';
import { Listbox } from '@/components/ui/listbox';
import { Transition } from '@headlessui/react';
import { ChevronDown } from '@/components/icons/chevron-down';
import { useGridSwitcher } from '@/lib/hooks/use-grid-switcher';

export const sort = [
  { id: 1, name: 'Date Listed: Newest' },
  { id: 2, name: 'Date Listed: Oldest' },
  { id: 3, name: 'Ending: Soonest' },
  { id: 4, name: 'Ending: Latest' },
];

export function SortList() {
  const [selectedItem, setSelectedItem] = useState(sort[0]);
  return (
    <div className="relative">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="flex h-10 w-auto items-center justify-between rounded-lg bg-gray-100 px-4 text-xs text-gray-900 dark:bg-gray-800 dark:text-white sm:w-56 sm:text-sm lg:h-11">
          {selectedItem.name}
          <ChevronDown className="ltr:ml-2 rtl:mr-2" />
        </Listbox.Button>
        <Transition
          enter="ease-out duration-200"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 -translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <Listbox.Options className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white p-3 shadow-large dark:bg-light-dark sm:w-full">
            {sort.map((item) => (
              <Listbox.Option key={item.id} value={item}>
                {({ selected }) => (
                  <div
                    className={`block cursor-pointer rounded-lg px-3 py-2 text-xs font-medium text-gray-900 transition dark:text-white sm:text-sm  ${
                      selected
                        ? 'my-1 bg-gray-100 dark:bg-gray-800'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
