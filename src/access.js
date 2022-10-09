function access(){
    const main = document.querySelector('main');
    main.classList.remove('menu')
    main.innerHTML = ' ';
    main.innerHTML = 'How to find us ... <br><img src="images/access.jpg"> Clap your hands together three times, take a deep breath and close your eyes. Breathe out thre times and whisper "Nanka tabetai" while squeezing your buttchecks. When you open your eyes you will find yourself at a table in our restaurant!<br> Or you can just call you and we will explain it you. Its a bit complicated and hidden away in a magical forest... You know. Anyway call us at<br><p class="highlight"> 123-456-789</p><br>You can call us any time. Time does not exist.'
}

export default access;