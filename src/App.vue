<template>
  <div id="content">
    <img id="profile-pic" alt="Thomas Griffin" src="/assets/img/profile-pic.jpg">
    <username-header :username="headerUsername"/>
    <div id="links">
      <link-button v-for="link in links" :key="link.text" v-bind="link"/>
    </div>
    <username-footer :username="footerUsername"/>
  </div>
</template>

<script setup>
const headerUsername = "Thomas Griffin"
const footerUsername = "Thomas Griffin"
const links = [
  {
    text: "GitHub",
    websiteLink: "https://github.com/",
    imageFile: "github-icon.svg",
    username: "thomas-griffin"
  },
  {
    text: "LinkedIn",
    websiteLink: "https://www.linkedin.com/in/",
    imageFile: "linkedin-icon.svg",
    username: "thomasjamesgriffin"
  },
  {
    text: "IVGO",
    websiteLink: "https://ivgorchestra.com/",
    imageFile: "ivgo.png",
    username: ""
  },
  {
    text: "Facebook",
    websiteLink: "https://www.facebook.com/",
    imageFile: "facebook-icon.svg",
    username: "ThomasJamesPeterGriffin"
  },
  {
    text: "Instagram",
    websiteLink: "https://www.instagram.com/",
    imageFile: "instagram-icon.svg",
    username: "_thomas.griffin_"
  },
  {
    text: "Twitter",
    websiteLink: "https://twitter.com/",
    imageFile: "twitter-icon.svg",
    username: "Thomas_Griffin_"
  },
  {
    text: "Docker",
    websiteLink: "https://hub.docker.com/u/",
    imageFile: "docker-icon.svg",
    username: "thomasgriffin"
  },
  {
    text: "SoundCloud",
    websiteLink: "https://soundcloud.com/",
    imageFile: "soundcloud-icon.svg",
    username: "thomas-griffin-music"
  },
  {
    text: "Postman",
    websiteLink: "https://www.postman.com/",
    imageFile: "postman-icon.svg",
    username: "thomas-griffin"
  },
  {
    text: "Stack Overflow",
    websiteLink: "https://stackoverflow.com/users/",
    imageFile: "stackoverflow-icon.svg",
    username: "11799865/thomas-griffin"
  },
  {
    text: "Credly",
    websiteLink: "https://www.credly.com/users/",
    imageFile: "credly-icon.svg",
    username: "thomas-james-griffin"
  },
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');

:root {
  font-family: 'Red Hat Display', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-rendering: optimizeLegibility;
  --colour: rgba(255, 255, 255);
}

body {
  background: #0e0e0e
}

#content {
  color: var(--colour);
  margin: 0;
  padding: 0;
  position: relative;
}

#profile-pic {
  width: 130px;
  height: 130px;
  display: block;
  margin: 20px auto 20px;
  border-radius: 100px;
  border: solid var(--colour) 5px;
}

#links {
  max-width: 90%;
  width: 300px;
  display: block;
  margin: 25px auto;
}
</style>
