# Git and Github

## Version Control
Git is version control software. Version control is the practice of tracking and managing different versions of software code.

When we would like to track our source code, we must first create a *git repository*. In your terminal, navigate to the project folder and run the `git init` command.

Git creates a hidden folder named `.git` to keep track of every modification to the code. Run `ls -a` to see this newly-created directory.

## Commits and Staging
Using Git, we can manage the changes we make to our source code over time. We do this by taking "snapshots" of our code at important moments. It's a little like taking pictures of your child or pet as they grow. These "snapshots" are called *commits* in the Git system.

We decide which files should be included in each "snapshot". This process is called *staging*. We add files to the stage before taking the "snapshot". A quick way to stage every file in the current directory is with the command `git add .`. Alternatively, add single files with `git add <file_name>`.

Now that files have been staged, we can take our "snapshot" by running the `commit` command with an appropriate message.

```shell
git commit -m "initial commit"
```

Think of this message as a caption for your snapshot. It should be as descriptive as possible. A great way to decide what your message should be is to ask yourself, "Why am I taking this snapshot?" The answer is your message.

**Example messages:**

```shell
git commit -m "fixed navbar"
```
```shell
git commit -m "created likes function"
```
```shell
git commit -m "added services page"
```


At any point in this process, run the `git status` command to see how the state of your repository changes after each command.

### Ignoring Files with `.gitignore`
Often, we do not want certain files to be included in the repository. To instruct git to ignore files, we must create a new file in the project root folder called `.gitignore`.

```shell
touch .gitignore
```
In this new file, list the files and folders you'd like git to ignore.

## Branches
We can also create different branches of our code at any time. This allows our workflow to be feature-based. It's a bit like creating different "timelines" in our own little multiverse.

Let's say we've built a web app for a pizza place. Later, the client would like you to add a "favorites" feature, where the user may save favorite pizzas for their convenience.

We can create a different branch to implement this feature without editing the live branch. When the feature is ready, this branch can be merged with the live branch.

In version control systems, these are called *production* branches and *development* branches.

Create a new branch with the `git branch <branch_name>` command.

```shell
git branch likes-feature
```

Switch to the new branch with the `git switch <branch_name>` command.

```shell
git switch likes-feature
```

## Using Github
Git and Github are two separate things. Git is version control software. Github is like a cloud-based storage solution for your Git repositories.

Of course, Github allows us to do much more than just publically share our code. We can also *collaborate* with other developers using Github. We can use *Github Pages* to host a front-end application for free. We can contribute to *open-source* projects. And much, much more.

Knowledge of Github and its features is critical for any developer. Every time we `push` our code to Github, we get a coveted green square on our profile. A profile full of green squares is much more appealing to employers than one that is barren.

### Pushing Code to Github
Let's explore one way to `push` our code to Github. This process involves:

1. Creating a remote repository on Github
2. Creating a local `git` repository on our computers
3. Staging files to commit
4. Committing those files with a message
5. Linking the local repo to the remote repo
6. Pushing our code to the remote repo

Luckily, this process is laid out for us step-by-step when we create a new repository on Github.

Log into your Github account and create a new repository.

Once created, you will be redirected to the repository's home page. That page contains all the steps to follow to push your code to the new repo.

![command line steps](./assets/new-repo.png)

Simply create a new folder for your project (ideally its name should match the repo's name), navigate into the folder with `cd <folder_name>`, and copy and paste each line into your terminal one-by-one.

In this example, the new repo on Github is named "my-project".

In your terminal, navigate to the directory where you'd like the project to live, then create the project root directory with `mkdir`.

```shell
mkdir my-project
```

Navigate to the new folder.

```shell
cd my-project
```

Now copy and paste each line from the Github repository's home page into your terminal one-by-one.

```shell
# creates a new file named README.md
# and inserts a "my-project" headline into it
echo "# my-project" >> README.md

# initializes a new empty repository
git init

# stages the README.md file to be committed
git add README.md

# commits with a message of "first commit"
# (takes the snapshot)
git commit -m "first commit"

# changes the name of your branch from "master" to "main"
git branch -M main

# links the local repo to the remote repo
# (yours will look different)
git remote add origin https://github.com/narcisolobo/my-project.git

# pushes code from local to remote
git push -u origin main
```