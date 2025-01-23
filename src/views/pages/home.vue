<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
<template>
  <div class="bg-f6">
      <div id="wrapper" class="flex">
          <div id="page" class="flex-grow">
              <div class="layout-wrap flex">

                  <div class="section-menu-left w-60 bg-f3 shadow-lg absolute left-0 top-0 h-[59.3rem]">
                      <div class="box-logo flex items-center justify-between p-4 border-b">
                          <a href="" id="site-logo-inner">
                              <img class="w-[7.3rem] px-1 py-3" src="/src/imge/img.jpg" alt="Logo">
                          </a>
                          <div class="button-show-hide cursor-pointer">
                              <i class="icon-menu-left text-gray-600"></i>
                          </div>
                      </div>
                              <div class="relative ... top-2">
                            <div class="absolute pointer-events-auto ...">
                              <svg class="absolute text-slate-500 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <input type="text" placeholder="Search" class="...">
                          </div>
                      <div class="center p-4">
                          <div class="center-item mb-4">
                              <div class="center-heading text-lg font-semibold">Main Home</div>
                              <ul class="menu-list mt-2">
                                  <li class="menu-item mb-2">
                                      <a href="/login" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                          <div class="icon mr-2"><i class="icon-grid"></i></div>
                                          <div class="text">Dashboard</div>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div class="center-item">
                              <ul class="menu-list">
                                  <li class="menu-item has-children mb-2">
                                      <a href="javascript:void(0);" 
                                         class="flex items-center p-2 text-gray-700 hover:bg-gray-200" 
                                         @click="toggleSubMenu">
                                          <div class="icon mr-2"><i class="fas fa-shopping-cart"></i></div>
                                          <div class="text">Products</div>
                                      </a>
                                      <ul v-show="isSubMenuVisible" class="sub-menu ml-4">
                                          <li class="sub-menu-item mb-1">
                                              <a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded">
                                                  <div class="text">Add Product</div>
                                              </a>
                                          </li>
                                          <li class="sub-menu-item mb-1">
                                              <a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded">
                                                  <div class="text">Products</div>
                                              </a>
                                          </li>
                                      </ul>
                                  </li>

                                  <li class="menu-item has-children mb-2">
                                      <a href="javascript:void(0);" 
                                         class="flex items-center p-2 text-gray-700 hover:bg-gray-200" 
                                         @click="toggleBrandSubMenu">
                                          <div class="icon mr-2"><i class="icon-layers"></i></div>
                                          <div class="text">Brand</div>
                                      </a>
                                      <ul v-show="isBrandSubMenuVisible" class="sub-menu ml-4">
                                          <li class="sub-menu-item mb-1">
                                              <a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded">
                                                  <div class="text">New Brand</div>
                                              </a>
                                          </li>
                                          <li class="sub-menu-item mb-1">
                                              <a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded">
                                                  <div class="text">Brands</div>
                                              </a>
                                          </li>
                                      </ul>
                                  </li>

                                  <li class="menu-item has-children mb-2">
                                      <a href="javascript:void(0);" 
                                         class="flex items-center p-2 text-gray-700 hover:bg-gray-200" 
                                         @click="toggleCategorySubMenu">
                                          <div class="icon mr-2"><i class="icon-layers"></i></div>
                                          <div class="text">Category</div>
                                      </a>
                                      <ul v-show="isCategorySubMenuVisible" class="sub-menu ml-4">
                                          <li class="sub-menu-item mb-1">
                                              <a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded">
                                                  <div class="text">New Category</div>
                                              </a>
                                          </li>
                                          <li class="sub-menu-item mb-1">
                                              <a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded">
                                                  <div class="text">Categories</div>
                                              </a>
                                          </li>
                                      </ul>
                                  </li>

                                  <li class="menu-item">
                                      <a href="" class="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                                          <div class="icon mr-2"><i class="icon-image"></i></div>
                                          <div class="text">Slider</div>
                                      </a>
                                  </li>
                                  <li class="menu-item">
                                      <a href="" class="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                                          <div class="icon mr-2"><i class="icon-grid"></i></div>
                                          <div class="text">Coupons</div>
                                      </a>
                                  </li>
                                  <li class="menu-item">
                                      <a href="" class="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                                          <div class="icon mr-2"><i class="icon-user"></i></div>
                                          <div class="text">User</div>
                                      </a>
                                  </li>

                                      <ul class="menu-list">
                                          <li class="menu-item mb-2">
                                              <a href="" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                                <div class="fill-blue-500 ...">
 
                                                </div>
                                                  <div class="text">Settings</div>
                                              </a>
                                          </li>
                                      </ul>
                                  
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          isSubMenuVisible: false,
          isBrandSubMenuVisible: false,
          isCategorySubMenuVisible: false,
      };
  },
  methods: {
      toggleSubMenu() {
          this.isSubMenuVisible = !this.isSubMenuVisible;
      },
      toggleBrandSubMenu() {
          this.isBrandSubMenuVisible = !this.isBrandSubMenuVisible;
      },
      toggleCategorySubMenu() {
          this.isCategorySubMenuVisible = !this.isCategorySubMenuVisible;
      },
  },
};
</script>

<style scoped>
/* يمكنك إضافة أنماط مخصصة هنا إذا لزم الأمر */
</style>