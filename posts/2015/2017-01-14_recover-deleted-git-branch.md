Every day we use git and sometimes we make mistakes like **deleting a branch** by a single click in Sourcetree or command line instruction. If you do this, please do not panic ;)

## Scenario

Your repository could look like this one

![Git repository example with source tree](/images/posts/repo.png)

Branches:

- master: main branch for release
- develop: main branch for dev purpose integration
- task/TASK-XXX: branches used for dev team tasks
- task/TASK-001: dev task assigned to Bob
- task/TASK-002: dev task assigned to myself

As a developer, you should only be working on task branches and create some pull requests PR to integrate your work into develop branch.

## Repository

Let's look at Bob's branch named *task/TASK-001*

```bash
$ git log
```

Log command gives an overview of your branch's commits.

```bash
commit 6de9bbff1885ddc35f102c9eea1fe60f3da97edc
Author: Bob <bob@gmail.com>
Date:   Sun Jan 15 19:30:48 2017 +0100

    TASK-001 second commit

commit 47921ed17f620b703f1eed7dfd458786e11e62a6
Author: Bob <bob@gmail.com>
Date:   Sun Jan 15 19:30:29 2017 +0100

    TASK-001 first commit
    
commit 5aa0eb11bdc9c4c6810750569b9de2ba4d7061e3
Author: Bob <bob@gmail.com>
Date:   Sun Jan 15 19:28:58 2017 +0100

    init repository    
```

## Deleting scenario

Bob has finished its work, and branch *task/TASK-001* has been merged into develop and master branches.
 
On my side I created a new branch from develop named *task/TASK-002*, and did some commits.

```bash
commit 6ede5ca18e1a20c130260509517e52b0f60450ff
Author: Julien Valéry <darul75@gmail.com>
Date:   Sun Jan 15 19:33:46 2017 +0100

    TASK-002 third commit

commit 4815ad0532b4399a615e4163b5f05d8ae8289e6f
Author: Julien Valéry <darul75@gmail.com>
Date:   Sun Jan 15 19:33:29 2017 +0100

    TASK-002 second commit

commit eadebd30ea57b257ce7c4902d7b9b6c9d536d3f2
Author: Julien Valéry <darul75@gmail.com>
Date:   Sun Jan 15 19:32:59 2017 +0100

    TASK-002 first commit

commit 6de9bbff1885ddc35f102c9eea1fe60f3da97edc
Author: Bob <bob@gmail.com>
Date:   Sun Jan 15 19:30:48 2017 +0100

    TASK-001 second commit

commit 47921ed17f620b703f1eed7dfd458786e11e62a6
Author: Bob <bob@gmail.com>
Date:   Sun Jan 15 19:30:29 2017 +0100

    TASK-001 first commit
    
commit 5aa0eb11bdc9c4c6810750569b9de2ba4d7061e3
Author: Bob <bob@gmail.com>
Date:   Sun Jan 15 19:28:58 2017 +0100

    init repository    
```


Suddenly I was tired or not really focused and by mistake DELETE MY BRANCH task/TASK-002 OMG !!! WHAT DID I DO ??? OH NO

![Git repository example with source tree](/images/posts/deleted-branch.png)

## Git reflog at the rescue

Really, do not worry, this kind of mistake happens to us all, we are not machines, and git powerful enough to handle that for you.

Just open a terminal at your repository root folder and type

```bash
git reflog
```

You will see a complete history of every main actions that occured.

```bash
6de9bbf HEAD@{0}: checkout: moving from task/TASK-002 to develop
6ede5ca HEAD@{1}: checkout: moving from develop to task/TASK-002
6de9bbf HEAD@{2}: checkout: moving from task/TASK-002 to develop
6ede5ca HEAD@{3}: commit: TASK-002 third commit
4815ad0 HEAD@{4}: commit: TASK-002 second commit
eadebd3 HEAD@{5}: commit: TASK-002 first commit
6de9bbf HEAD@{6}: checkout: moving from develop to task/TASK-002
6de9bbf HEAD@{7}: merge task/TASK-001: Fast-forward
5aa0eb1 HEAD@{8}: checkout: moving from task/TASK-001 to develop
6de9bbf HEAD@{9}: commit: TASK-001 second commit
47921ed HEAD@{10}: commit: TASK-001 first commit
5aa0eb1 HEAD@{11}: checkout: moving from develop to task/TASK-001
5aa0eb1 HEAD@{12}: checkout: moving from master to develop
5aa0eb1 HEAD@{13}: commit (initial): init repository
```

And to recover you branch, simply choose a commit you are interested in, mine would be

```bash
6ede5ca HEAD@{3}: commit: TASK-002 third commit
```

Now just recover your branch based on this commit, and you are fine again.

```bash
git branch task/TASK-002 6ede5ca
```

![Git repository example with source tree](/images/posts/recovered-branch.png)

And life can continue.

## Conclusion

To recover a deleted branch, simply find commit you are intested in with reflog command and recover a branch based on commit you would choose.

## References

[git-log](https://git-scm.com/docs/git-log)

[git-reflog](https://git-scm.com/docs/git-reflog)


----------

Tags: *Git*
