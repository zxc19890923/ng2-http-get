import {Component, OnInit} from "@angular/core";
import {Http, Response} from '@angular/http';
@Component({
    selector: "my-about",
    templateUrl: "../templates/about.html"
})
// http 获取异步加载服务器数据
export class AboutComponent implements OnInit {
    // 定义获取数据变量, 数组对象
    data:Array;
    // 初始化变量http 必须定义为public
    constructor(public http:Http) {
    }

    // 挂在完毕加载数据
    ngOnInit():void {
        this.http.get('../data/user.json')
            .subscribe((res:Response) => {
                this.data = res.json();
                console.log(res.json());
            });
    }

    showInfo(id) {
        alert(id);
    }

}
