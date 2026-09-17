# Terceiro Commit Itallo

```git 



C:\Users\Aluno\Desktop>git clone https://github.com/DevKhal-EL/Biblio-Tech.git
Cloning into 'Biblio-Tech'...
remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (12/12), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 12 (delta 0), reused 12 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (12/12), done.

C:\Users\Aluno\Desktop>dir
 O volume na unidade C não tem nome.
 O Número de Série do Volume é D8BE-98EB

 Pasta de C:\Users\Aluno\Desktop

17/09/2026  08:41    <DIR>          .
17/09/2026  08:41    <DIR>          ..
17/09/2026  08:41    <DIR>          Biblio-Tech
01/10/2025  16:09               643 brModelo.lnk
01/10/2025  15:45             1.088 Cisco Packet Tracer.lnk
27/11/2025  17:02             2.136 Docker Desktop.lnk
01/12/2025  16:30             2.185 Postman.lnk
22/05/2026  10:24        22.405.248 TOEIC Secure Browser.exe
02/10/2025  16:20             1.400 Visual Studio Code.lnk
02/10/2025  16:07             1.041 visualg30.lnk
               7 arquivo(s)     22.413.741 bytes
               3 pasta(s)   121.599.913.984 bytes disponíveis

C:\Users\Aluno\Desktop>cd Biblio-Tech

C:\Users\Aluno\Desktop\Biblio-Tech>code ..


---

PS C:\Users\Aluno\Desktop> cd Biblio-Tech
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
Switched to branch 'itallo'
PS C:\Users\Aluno\Desktop\Biblio-Tech> git pull
>>
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> itallo

PS C:\Users\Aluno\Desktop\Biblio-Tech> 
PS C:\Users\Aluno\Desktop\Biblio-Tech> git push -u origin itallo
>>
info: please complete authentication in your browser...
fatal: itallo cannot be resolved to branch
PS C:\Users\Aluno\Desktop\Biblio-Tech> git branch
  Itallo
PS C:\Users\Aluno\Desktop\Biblio-Tech> git switch Itallo
Switched to branch 'Itallo'
PS C:\Users\Aluno\Desktop\Biblio-Tech> git push -u origin Itallo
>>
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (6/6), 574 bytes | 287.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote:
remote: Create a pull request for 'Itallo' on GitHub by visiting:
remote:      https://github.com/DevKhal-EL/Biblio-Tech/pull/new/Itallo
remote:
To https://github.com/DevKhal-EL/Biblio-Tech.git
 * [new branch]      Itallo -> Itallo
branch 'Itallo' set up to track 'origin/Itallo'.
PS C:\Users\Aluno\Desktop\Biblio-Tech> cd ...
cd : Não existe um objeto no caminho especificado C:\Users\Aluno\Desktop\Biblio-Tech\....
No linha:1 caractere:1
+ cd ...
+ ~~~~~~
    + CategoryInfo          : InvalidArgument: (:) [Set-Location], PSArgumentException
    + FullyQualifiedErrorId : Argument,Microsoft.PowerShell.Commands.SetLocationCommand
 
PS C:\Users\Aluno\Desktop\Biblio-Tech> cd ..
PS C:\Users\Aluno\Desktop> 
 *  History restored 

PS C:\Users\Aluno\Desktop\Biblio-Tech> git status
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
PS C:\Users\Aluno\Desktop\Biblio-Tech> git branch
PS C:\Users\Aluno\Desktop\Biblio-Tech> git switch Itallo
branch 'Itallo' set up to track 'origin/Itallo'.
Switched to a new branch 'Itallo'
branch : O termo 'branch' não é reconhecido como nome de cmdlet, função, arquivo de script ou programa operável. Verifique a grafia  
do nome ou, se um caminho tiver sido incluído, veja se o caminho está correto e tente novamente.
No linha:1 caractere:1
+ branch
+ ~~~~~~
    + CategoryInfo          : ObjectNotFound: (branch:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS C:\Users\Aluno\Desktop\Biblio-Tech> git branch
PS C:\Users\Aluno\Desktop\Biblio-Tech> git switch Khalel
branch 'Khalel' set up to track 'origin/Khalel'.
PS C:\Users\Aluno\Desktop\Biblio-Tech> git branch
* Khalel
  main
PS C:\Users\Aluno\Desktop\Biblio-Tech> git switch Itallo 
Switched to branch 'Itallo'
Your branch is up to date with 'origin/Itallo'.
PS C:\Users\Aluno\Desktop\Biblio-Tech> git branch 
* Itallo
  Khalel
  main
PS C:\Users\Aluno\Desktop\Biblio-Tech> git status
On branch Itallo
Your branch is up to date with 'origin/Itallo'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\Aluno\Desktop\Biblio-Tech> git add .
PS C:\Users\Aluno\Desktop\Biblio-Tech> git commit -m "Mudei muito"
[Itallo 534b3f8] Mudei muito
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\Aluno\Desktop\Biblio-Tech> git pull
Already up to date.
PS C:\Users\Aluno\Desktop\Biblio-Tech> git push origin Itallo
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 297 bytes | 297.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/DevKhal-EL/Biblio-Tech.git
   5e7f96f..534b3f8  Itallo -> Itallo
PS C:\Users\Aluno\Desktop\Biblio-Tech>```