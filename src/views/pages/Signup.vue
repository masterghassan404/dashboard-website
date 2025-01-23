<template>

   

    <div class=" size-[40.3rem]  h-[40.3rem] bg-[url('/src/imge/FB.jpg')] bg-cover bg-center">
        <h3 class="text-lg bg-f9 bg-opacity-60 text-lx font-bold mt-[5.rem] ml-[1.rem] text-f1 "> قوم بي إنشاء حساب جديد</h3>
        <div class="bg-f5 bg-opacity-10 h-[30.1rem] w-[35.1rem] ml-[2.1rem] mt-[3.1rem]  ">
            <p class=" text-f1 text-lx font-bold text-lg border-b-2 border-f5">Login</p>
            
            <div class="bg-f9 bg-opacity-50 mt-[1.1rem] h-[25.1rem] w-[30.0rem] ml-[2.1rem] ">
                <div class="card">
                    <div class="card-header "></div>

                    <div class="#">
                        
             
                            <!-- <div class="row mb-3">
                                <label for="name" class="text-f1  text-lx font-bold text-lg "><p class="absolute mr-[5.0rem] ">Name:</p> </label>

                                <div class="col-md-6">
                                    <input  type="name" class=" w-[15.5rem] h-[2.2rem] bg-f1 text-f9 text-center  ml-[7.0rem] mt-[1.rem] " placeholder="enter username" v-model="name">
                                    
                                </div>
                            </div>  -->

                            <div class="row mb-3">
                                <label for="email" class="text-f1 text-lx font-bold text-lg "><p class="absolute mr-[5.0rem] mt-[1.0rem] ">Email:</p> </label>

                                <div class="col-md-6">
                                    <input  type="email" class=" w-[15.5rem] h-[2.2rem] bg-f1 text-f9 text-center  ml-[7.0rem] mt-[1.0rem] " placeholder="enter Email" v-model=" email">
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="text-f1 text-lx font-bold text-lg"> <p class="absolute mr-[5.0rem] mt-[1.0rem] ">Password:</p></label>

                                <div class="col-md-6">
                                    <input  type="password" class="w-[15.5rem] h-[2.2rem] bg-f1 text-f9 text-center ml-[7.0rem] mt-[1.0rem] " placeholder="enter Password" v-model="password">

                                   
                                </div>
                            </div>

                            <!-- <div class="row mb-3">
                                <label for="password-confirm" class="text-f1 text-lx font-bold text-lg"><p class="absolute mr-[5.0rem] mt-[1.0rem] ">password feast:</p></label>

                                <div class="col-md-6">
                                    <input  type="passwords" class=" w-[15.5rem] h-[2.2rem] bg-f1 text-f9 text-center ml-[7.0rem] mt-[1.0rem] " placeholder="password feast" v-model="passowrds ">
                                        
                                </div>
                            </div> -->

                            <div class="row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button class="w-[8.0rem] text-lx font-bold text-lg  h-[3.0rem] mb-[5%] text-[20px] bg-f5"  
                                    @click="Signup" > Signup </button>
                            
                                     <a href="/login" class="text-f1 m-2 p-2"> Money Login </a>

                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // تأكد من الاستيراد الصحيح

export default {
    name: "Signup",
    data() {
        return {
           
            email: "",
            password: "",
            initials: "",
        };
    },
    methods: {
        Signup() {
            const auth = getAuth(); // الحصول على مرجع المصادقة
            createUserWithEmailAndPassword(auth, this.email, this.password)
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