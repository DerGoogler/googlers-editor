interface DocumentLogging {
    memory: any;
    id($id: string): void;
    que($qur: string): void;
    html($id: string, $html: any): void;
}

export default class $Document implements DocumentLogging {
    public memory: any;
    public id($id: string): void {
        document.getElementById($id);
    }
    public que($qur: string): void {
        document.querySelector($qur);
    }
    public html($id: string, $html: any): void {
        document.getElementById($id).innerHTML = $html;
    }

}