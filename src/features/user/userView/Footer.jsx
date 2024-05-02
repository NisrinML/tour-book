import CopyWriteIcon from "../../../assets/images/copyWriteIcon.svg"
function Footer(){
return <div >
<footer class="absolute bottom-0 w-full ">
  <div class="w-10/12 px-8 mx-auto font-['Open_Sans']">
    <div
      class="flex flex-col items-center justify-center w-full py-2 mt-4 border-t border-text-light gap-1">
      <div
        class="flex flex-row items-start justify-center w-4/6 gap-4  font-sans text-xs   text-center text-text-light">
       <span class="flex flex-col"><a href="">our services</a></span>
       <span class="flex flex-col"><a href="">privacy</a></span>
       <span class="flex flex-col"><a href="">about us</a></span>
       <span class="flex flex-col"><a href="">contact us</a></span>
       <span class="flex flex-col"><a href="">help</a></span>
      </div>
      <div
        class="flex flex-row items-center justify-center w-3/5 gap-4   text-xs   text-center text-text-light">
      <span class="flex flex-row">
        <img src={CopyWriteIcon} class="w-3 h-3 m-1" />
        2023 TourBook from IT engineers</span>
      </div>
    </div>
  </div>
</footer>
</div>
}

export default Footer