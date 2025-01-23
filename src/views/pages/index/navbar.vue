<template>

<body >

    <header class="fixed top-0 left-0 w-full h-[5.4rem] p-2 md:p-[0.3rem] z-10 flex justify-between items-center z-100 backdrop-blur-md bg-f4 bg-opacity-30">
        <a href="#" class="text-2xl font-bold text-white">
            <img class="w-[6.3rem] px-2 py-2" src="/src/imge/FB.jpg" alt="logo"></a>

        <input type="checkbox" id="check" class="hidden display-none">
        <label for="check" class="absolute right-5 text-white text-3xl cursor-pointer icons">
            <i class='bx bx-menu' id="menu-icon"></i>
            <i class='bx bx-x hidden' id="close-icon"></i>
        </label>

        <nav class="navbar hidden md:flex space-x-8 ">
            <a href="#" class="text-lg font-bold text-f1 text-opacity-80 border-b">Home</a>
            <a href="/login " class="text-lg font-bold text-f1 text-opacity-80 border-b">Login</a>
            <a href="#" class="text-lg font-bold text-f1 text-opacity-80 border-b">Gallery</a>
            <a href="#" class="text-lg font-bold text-f1 text-opacity-80 border-b">Services</a>
            <a href="#" class="text-lg font-bold text-f1 text-opacity-80 border-b">Contact</a>
        </nav>
    </header>
    
</body> 
        
</template>
<!-- <script> 
export default {
    name: 'login'
}

</script> -->