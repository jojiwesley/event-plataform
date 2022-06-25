import { DiscordLogo } from 'phosphor-react';

interface Iprops {
    text: string;
    url: string;
}
export default function ButtonPrimary (props:Iprops,) {
   
   const {text, url} = props;
    return(
        <a href={url} className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-self-center hover:bg-green-700 transition-colors">    
              <DiscordLogo size={24} />
              {text}
        </a>
    )
};

