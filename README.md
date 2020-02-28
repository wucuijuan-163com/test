# git命令
## 基本命令
1.cd ..                 --返回上一级\
2.cd 文件名称           --进入某个文件\
3.pwd                   --显示当前路径\
4.mkdir 文件夹名        --新建文件夹（git bash）\
5.md 文件夹名           --新建文件夹（cmd）\
6.touch 文件名              --新建文件\
7.vi 文件名             --新建文件并进入编辑状态（已有文件，直接进入编辑状态）\
###### vi编辑模式下得命令
    1.i切换到编辑模式
    2.esc切换到命令模式
    3.:q退出编辑，如果文本内容被修改过，则会报错
    4.:q!强制退出，如修改过，会丢弃此次的修改
    5.:x/:wq 退出编辑并保存
8.\

## 状态
git status                   --查看状态 
## 配置信息
1.git config user.name          --查看账号名称
2.git config user.email         --查看邮箱
3.git config --list             --查看所有配置信息\
4.git config user.name "wucuijuan-163com"       --修改账号名称
## 克隆代码
1.git clone 克隆代码地址       --克隆代码到本地
## 提交代码
1.git add                      --提交到暂存区
2.git commit                    --提交到本地分支\
3.git push                      --推送到git\
## 拉取代码
1.git pull