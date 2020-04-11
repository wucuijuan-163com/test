# git 命令

##

## 基本命令

1.cd .. --返回上一级\
2.cd 文件名称 --进入某个文件\
3.pwd --显示当前路径\
4.mkdir 文件夹名 --新建文件夹（git bash）\
5.md 文件夹名 --新建文件夹（cmd）\
6.touch 文件名 --新建并进入编辑状态（已有文件，直接进入编辑状态）

#### vi 编辑模式下得命令

    1.i切换到编辑模式\
    2.esc切换到命令模式\
    3.:q退出编辑，如果文本内容被修改过，则撒法f会报错\
    4.:q!强制退出，如修改过，会丢弃本次的修改\
    5.:x/:wq 退出编辑并保存

## GIT 配置信息

1.git config --global user.name 'wucuijuan-163com' --配置账号名称\
2.git config --global user.email '123456@163.com' --配置邮箱\
3.git config user.name/user.email --查看名称/邮箱\
4.git config --list --查看所有配置信息\
5.git config user.name/user.email "wucuijuan-163com" --修改名称/邮箱

## Git查询命令

git remote -v       --查看项目远程地址
git remote show origin  --查看当前仓库基本信息
git status --查看修改的内容（状态）
git branch -a       --查看所有分支
git log     --查看历史提交信息


## 克隆代码

1.git clone '克隆代码地址' --克隆代码到本地\
2.git init --初始化本地仓库

## 提交代码

1.git add --添加到暂存区\
2.git commit/git commit -m '提交信息' --提交到本地分支\
3.git push --推送代码到 git 库

### 拉取代码

1.git pull --拉取 git 库代码

### 检出分支

1.git chekout

## 解决冲突

1.拉取最新代码到本地 --git pull\
2.本地解决冲突后，重新提交代码

## 代码回到过去

1.git reset --hard 指定环境的指针 --回到指定环境的指针\
2.git reflog --找到最近拉取的代码的指针\
3.git reset --hard 最近拉取代码的指针 --回到最近拉取的代码

## 标签（Tag）管理 （name：标签名）

1.git tag --查看所有标签\
2.git tag name --创建标签\
3.git tag -a name -m "comment" --指定提交信息\
4.git push origin name --标签发布（推送到 git）\
5.git tag -d name --删除标签

## 分支管理 （name：分支名）

1.git branch --查看所有分支及当前分支\
2.git branch name --新建分支\
3.git checkout name --切换分支\
4.git branch -d name --删除分支

## 合并代码到 master 分支

1.git branch --查看当前分支\
2.git checkout master --切换到 master 分支\
3.git merge 需要合并到 master 的分支名称 --合并指定的分支到 master