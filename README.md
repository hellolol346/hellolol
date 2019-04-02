# hellollol.com website

Welcome to my project where I store the code for my website.

## Windows Installation

Assuming you can access a terminal with the appropriate tools:

1. Find the `git-bash` program by searching from Windows.

2. First we copy the project from the web to our local hard computer with this 
   command in the `git-bash` terminal:
 
   `git clone git@github.com:hellolol346/hellolol.git`

   This will create a new folder in your current location called `hellolol`.

3. Now we navigate (**c**hange **d**irectory) to the right directory.
   
   `cd hellolol`

4. We install the things we need:

   `npm install`

   This will look for a file called `package.json` and install everything you list
   into a folder called `node_modules`. That contains files we don't have to worry
   about but we'll use them to our benefit later.

5. We start the project in a browser:

   `npm start`

   Now if you edit the source code of your files under `hellolol/src` then you should
   be able to view the changes almost immediately in your browser.
