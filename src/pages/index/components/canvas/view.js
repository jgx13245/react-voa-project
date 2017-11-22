import React,{Component} from 'react'


export default class Canvas extends Component {
    render() {
        return (
            <canvas  className="index-left-img" width="338" height="282" ref={(canvas)=>{this.canvas=canvas}}></canvas>
        )
    }
    componentDidMount() {
        this.drawCanvas();
    }
    drawCanvas() {
        this.init();
    }
            
    init() {
            const ctx= this.canvas.getContext("2d");
            var that = this;
            setInterval(function(){
                ctx.clearRect(0,0,500,500);
            that.drawTimesMove(ctx);
            },1000)
        }
        drawTimesMove(ctx) {
            this.drawTable(ctx);
            this.drawCenterPoint(ctx);
            this.drawMinutePoint(ctx);
            this.drawHoursPoint(ctx);
            this.drawHoursNumber(ctx);
            this.drawTimes(ctx);
        }
        drawTable(ctx) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(170,140);
            ctx.arc(0,0,130,0,Math.PI*2);
            ctx.stroke();
            ctx.restore();
        }
        drawCenterPoint(ctx) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(170,140);
            ctx.arc(0,0,5,0,Math.PI*2);
            ctx.fillStyle="red";
            ctx.fill();
            ctx.restore();
        }
        drawMinutePoint(ctx) {
            ctx.save();
            ctx.translate(170,140);
            ctx.beginPath();
            for  (var i=0;i<60;i++){
                ctx.moveTo(0,-122);
                ctx.lineTo(0,-126);
                ctx.rotate(Math.PI/30)
            }
            ctx.lineWidth=2;
            ctx.stroke();
            ctx.restore();
        }
        drawHoursPoint(ctx) {
            ctx.save();
            ctx.translate(170,140);
            ctx.beginPath();
            for  (var i=0;i<12;i++){
                ctx.moveTo(0,-120);
                ctx.lineTo(0,-130);
                ctx.rotate(Math.PI/6)
            }
            ctx.lineWidth=2;
            ctx.stroke();
            ctx.restore();
        }
        drawHoursNumber(ctx) {
            ctx.save();
            ctx.translate(170,140);
            ctx.beginPath();
            for(var i=1;i<=12;i++){
                ctx.font="18px Arial";
                ctx.textAlign="center";
                ctx.textBaseLine="middle";
                ctx.fillText(i,Math.sin(Math.PI/6*i)*100,-Math.cos(Math.PI/6*i)*100);
            }
            ctx.restore();
        }
        drawTimes(ctx) {
            var date = new Date(),
            seconds  = date.getSeconds(),
            minutes  = date.getMinutes(),
            hours   = (date.getHours()%12);
            this.drawSeconds(seconds,ctx);
            this.drawMinutes(minutes,ctx);
            this.drawHours(hours,ctx);
        }
        drawSeconds(seconds,ctx) {
            ctx.save();
            ctx.translate(170,140);
            ctx.beginPath();
            ctx.rotate(Math.PI/30*seconds);
            ctx.moveTo(0,-130);
            ctx.lineTo(0,10);
            ctx.strokeStyle="red";
            ctx.stroke();
            ctx.restore();
        }
        drawMinutes(minutes,ctx) {
            ctx.save();
            ctx.translate(170,140);
            ctx.beginPath();
            ctx.rotate(Math.PI/30*minutes);
            ctx.moveTo(0,-106);
            ctx.lineTo(0,7);
            ctx.strokeStyle="black";
            ctx.stroke();
            ctx.restore();
        }
        drawHours(hours,ctx) {
            ctx.save();
            ctx.translate(170,140);
            ctx.beginPath();
            ctx.rotate(Math.PI/6*hours);
            ctx.moveTo(0,-70);
            ctx.lineTo(0,3);
            ctx.strokeStyle="black";
            ctx.stroke();
            ctx.restore();
        }
    
}












