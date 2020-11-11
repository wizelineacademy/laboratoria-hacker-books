import React from 'react'

// Components
import AvatarUser from '../svg/avatarUser'

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between flex-wrap bg-blue-900 p-6" style={{ padding: "12px" }}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <h2>Bookmark</h2>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block lg:flex lg:flex-grow lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow" style={{ marginLeft: '22rem' }}>
                    <input type="text" className="px-4 py-2" style={{ width: "22rem" }} placeholder="What do you want to watch today" />
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" className="inline-block items-center text-sm px-4 py-2 leading-none border rounded text-white border-white bg-purple-500 hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">New video</a>
                    <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" className="block mt-4 mx-3 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <AvatarUser />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;