<template>


 <body class="h-[10.0rem] w-[40.0rem] bg-cover bg-center font-sans " style="background-image: url('/src/imge/FB.jpg');">


     <div class="w-[320px] h-[420px] bg-f9 bg-opacity-60   mt-[50%] ml-[50%] transform -translate-x-1/2 -translate-y-1/2 p-[50px] pl-[30px]">
          <img class="w-[100px] h-[100px] rounded-[10%] absolute top-[-50px] left-[36%] " src="/src/imge/ddd-wsl.png" alt="avater">
             <h1 class="py-[40px] m-0  text-center text-[30px] text-f1">alqrshy</h1>
              <form class="bg-f3 bg-opacity-10">
               <p class="m-0 p-0 text-lx font-bold text-f1">Email:</p>
               <input class="w-full mb-[7%] border-b border-f5 bg-transparent outline-none h-[40px] text-center text-f1 " type="text" name="Email" placeholder="enter username" v-model="emali">
              <p class="m-0 p-0 text-lx font-bold text-f1">password:</p>
              <input class="w-full mb-[7%] border-b border-f5 bg-transparent outline-none h-[40px] text-center text-f1 "  type="text" name="password" placeholder="enter password" v-model="password">
              <button class="w-[8.0rem] text-lx font-bold text-lg  h-[3.0rem] mb-[5%] text-[20px] bg-f5"  >
                <p @click="login" class="text-center m-0 p-0 text-f1"> Login</p>
              </button><br>
              <a href="/Signup" class="text-f1"> Mc set up account </a>

            </form>
        </div>
        </body>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            initials: "",
        };
    },
    methods: {
        login() {
            const auth = getAuth(); 
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((user)=>{
                    console.log(user)
                },
                (err)=>{
                    alert(err)
                }
            )
        }
    }
}
</script>