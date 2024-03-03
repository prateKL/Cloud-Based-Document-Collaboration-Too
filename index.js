// 模拟文档协作工具类
class DocumentCollaborationTool {
    constructor() {
        this.documents = [];
    }

    // 创建新文档
    createDocument(title, content) {
        const document = { title, content, versions: [{ version: 1, content }] };
        this.documents.push(document);
        console.log(`Document "${title}" created successfully.`);
    }

    // 编辑文档
    editDocument(title, content) {
        const document = this.documents.find(doc => doc.title === title);
        if (document) {
            const latestVersion = document.versions[document.versions.length - 1].version;
            document.versions.push({ version: latestVersion + 1, content });
            console.log(`Document "${title}" edited successfully.`);
        } else {
            console.log(`Document "${title}" not found.`);
        }
    }

    // 添加评论
    addComment(title, comment) {
        const document = this.documents.find(doc => doc.title === title);
        if (document) {
            console.log(`Comment "${comment}" added to document "${title}".`);
        } else {
            console.log(`Document "${title}" not found.`);
        }
    }

    // 分享文档
    shareDocument(title, user) {
        const document = this.documents.find(doc => doc.title === title);
        if (document) {
            console.log(`Document "${title}" shared with user "${user}".`);
        } else {
            console.log(`Document "${title}" not found.`);
        }
    }
}

// 创建文档协作工具实例
const collaborationTool = new DocumentCollaborationTool();

// 示例用法
collaborationTool.createDocument("Project Proposal", "This is our project proposal document.");
collaborationTool.editDocument("Project Proposal", "Updated project proposal content.");
collaborationTool.addComment("Project Proposal", "Great proposal! I suggest adding more details.");
collaborationTool.shareDocument("Project Proposal", "user123");
