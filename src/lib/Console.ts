interface ConsoleLogging {
    memory: any;
    log($log: any): void;
    err($err: any): void;
    wrn($wrn: any): void;
}

export default class $Console implements ConsoleLogging {
    public memory: any;
    
    public log = ($log: any): void => {
        console.log($log);
    }
    public err = ($err: any): void => {
        console.error($err);
    }
   public wrn = ($wrn: any): void => {
        console.warn($wrn);
    }
}