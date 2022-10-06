import React, { Component } from 'react'
import './../styles/home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
         rightMenu:["Home","About","Contact"],
         accounts:[{
             name:"Rorita",
             age:20,
             description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate eget dui id varius. In ut libero ut felis dignissim vestibulum sit amet id ipsum. Quisque congue tellus ut metus dapibus fringilla. Suspendisse a sapien ac justo egestas sodales et sed justo. Quisque imperdiet, sem at blandit viverra, est quam convallis sem, quis dictum est lorem et leo. Nam eleifend feugiat sollicitudin. Morbi ac facilisis sem. Nulla condimentum nec turpis in venenatis. Sed aliquet orci dignissim est pretium auctor. Donec dapibus auctor purus quis auctor. Phasellus pulvinar mi id metus pulvinar, vitae dapibus elit aliquam.",
             img:""
        }]
        };
      }
    render() {
        return (
            <div className="home">
            
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut imperdiet velit. Mauris tortor neque, iaculis ut rutrum non, sagittis et sapien. Vivamus tempus justo ut hendrerit sollicitudin. Nullam in mauris in ex pharetra gravida sollicitudin fermentum arcu. Pellentesque vitae molestie velit. Mauris libero est, porta et risus et, blandit pellentesque purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Vestibulum ac tincidunt sapien, at gravida urna. Maecenas iaculis erat rhoncus scelerisque suscipit. Praesent vitae diam euismod, malesuada mauris ac, hendrerit metus. Maecenas a lacus a nisi cursus placerat. Donec porta nec diam vel tempus. In fringilla augue non eros vehicula aliquam. Pellentesque convallis lobortis lorem et pulvinar. Maecenas sit amet dolor feugiat, sodales enim nec, mattis nibh. Ut faucibus ipsum eros, sodales tincidunt nunc ultricies a. Sed sagittis, sapien vel faucibus vulputate, sapien nulla auctor purus, sit amet commodo leo tellus vitae risus. Phasellus cursus maximus erat sit amet laoreet. Curabitur eget nisi fringilla, ultrices diam in, porta justo. Donec et libero eget ex venenatis malesuada. Fusce accumsan suscipit vulputate. Curabitur facilisis dapibus sapien.

Integer maximus facilisis elit, sed posuere est dignissim at. Curabitur nec risus auctor massa placerat facilisis vel sit amet lectus. Morbi dui eros, posuere sit amet vehicula sed, faucibus id est. Fusce in cursus est. Nunc neque ante, maximus sed risus a, pulvinar consectetur mauris. Nulla vitae nibh vel nisl mattis elementum. Pellentesque sed imperdiet neque, ut efficitur turpis. Phasellus at condimentum massa. Etiam eget est a odio sagittis feugiat. Aliquam elementum interdum velit, sed maximus metus pulvinar id. Sed imperdiet maximus erat nec feugiat. Maecenas ut nulla ut metus facilisis ultrices a eget ex. Vivamus vitae tortor commodo, semper enim eu, consectetur tellus.

Donec iaculis varius interdum. Curabitur vel maximus tortor, eu euismod nibh. Quisque sed nulla nec urna ornare laoreet eget ut orci. Nulla eget pharetra massa, lacinia tincidunt mauris. Suspendisse non magna condimentum, fringilla urna nec, bibendum metus. Nunc sed erat sagittis, tristique diam eget, porta nulla. Suspendisse pretium, purus quis dignissim volutpat, erat ex facilisis enim, id blandit nisl orci vitae lectus. Integer augue mi, luctus sit amet sapien ac, commodo lobortis elit. Pellentesque vel sem ipsum. Sed vestibulum mauris vitae nunc efficitur, eget placerat orci sodales. Ut condimentum fringilla turpis eu elementum.

Donec ullamcorper egestas purus, ac sagittis enim. Aenean fermentum turpis ut orci eleifend, nec pretium leo porta. Fusce ullamcorper risus nec tristique tincidunt. Donec at sagittis leo. Cras pulvinar tortor in mi pharetra hendrerit. Nullam at iaculis mi. Proin eget maximus justo, eget pretium sapien. Aliquam condimentum sem magna, quis dignissim lacus ullamcorper ut. Ut imperdiet vehicula consequat. Sed tortor turpis, dictum non viverra iaculis, ultricies vitae ante. Suspendisse semper nibh in porttitor vehicula. Phasellus sit amet facilisis ipsum, vitae euismod orci. Morbi fringilla sapien non fermentum faucibus. Duis vehicula tempus sollicitudin. Aliquam sodales eros et congue porttitor. Aliquam venenatis mauris dolor, eget viverra justo accumsan ut.

Mauris in maximus nisi, at tristique ante. Suspendisse dictum tincidunt viverra. Aliquam at congue lacus. Vivamus posuere est et purus tristique, commodo viverra elit sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at scelerisque dolor, viverra luctus neque. Duis ut ornare dui. Suspendisse eget erat sollicitudin, venenatis diam ut, dignissim libero. Nunc diam orci, feugiat sit amet egestas vel, tristique vitae lectus. Nam vitae magna tortor. Suspendisse potenti. Nam at ipsum porta quam molestie tristique nec eget leo. Duis accumsan viverra lectus, a porttitor mauris semper lacinia. Etiam imperdiet arcu quis pellentesque pulvinar. In hac habitasse platea dictumst.

</p>
                {/* {this.state.accounts.map((account)=><div className="account">
                    <div className="descryption">
                        <a className="accName">{account.name}</a>
                        <a className="accDescryption">{account.description.length>400?account.description.substr(0,386)+"...":account.description}</a>
                    </div>
                    
                </div>)} */}
            
            
               
            </div>
        )
    }
}
