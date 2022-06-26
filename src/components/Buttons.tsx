import { DiscordLogo, Lightning } from 'phosphor-react';

interface Iprops {
    text: string;
    url: string;
}
export function ButtonPrimary (props:Iprops,) {
   
   const {text, url} = props;
    return(
        <a href={url} className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-self-center hover:bg-green-700 transition-colors">    
              <DiscordLogo size={24} />
              {text}
        </a>
    )
};

export function ButtonSecundary (props:Iprops,) {
   
    const {text, url} = props;
     return(
         <a href={url} className="p-4 text-sm border border-blue-500 text-blue-500  font-bold flex gap-2 items-center justify-center rounded uppercase hover:bg-blue-500 hover:text-gray-900">    
               <Lightning size={24} />
               {text}
         </a>
     )
 };