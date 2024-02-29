let placeholder = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
export const getUserCards = (users) => {
  return `
    
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
<div class="flex justify-end px-4 pt-4">
    <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100   p-1.5" type="button">
        <span class="sr-only">Open dropdown</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
        </svg>
    </button>
</div>
<div class="flex flex-col items-center pb-10">
    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="${users?.image ||placeholder }" alt="Bonnie image"/>
    <h5 class="mb-1 text-xl font-medium text-gray-900 ">${users?.firstName +" "+ users?.lastName  || "unknow"}</h5>
    <span class="text-sm text-gray-500 ">${users?.username || "unknown"}</span>
    <div class="flex mt-4 md:mt-6">
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Add friend</a>
        <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  ">Message</a>
    </div>
</div>
</div>

    `;
};
