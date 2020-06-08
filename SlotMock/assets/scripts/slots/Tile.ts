const { ccclass, property } = cc._decorator;

@ccclass
export default class Tile extends cc.Component {
  @property({ type: [cc.SpriteFrame], visible: true })
  private textures = [];

  @property({type: cc.Prefab})
  private gfx = null

  async onLoad(): Promise<void> {
    await this.loadTextures();
    await this.loadGFX();
  }

  async resetInEditor(): Promise<void> {
    await this.loadTextures();
    await this.loadGFX();
    this.setRandom();
  }

  async loadTextures(): Promise<boolean> {
    const self = this;
    return new Promise<boolean>(resolve => {
      cc.loader.loadResDir('gfx/Square', cc.SpriteFrame, function afterLoad(err, loadedTextures) {
        self.textures = loadedTextures;
        resolve(true);
      });
    });
  }

  async loadGFX(): Promise<boolean> {
    const self = this;
    return new Promise<boolean>(resolve => {
      cc.loader.loadRes('glow', cc.Prefab, function afterLoad(err, loadedGFX) {
        self.gfx = cc.instantiate(loadedGFX);
        resolve(true);
      });
    });
  }

  setTile(index: number): void {
    this.node.getComponent(cc.Sprite).spriteFrame = this.textures[index];
  }

  setRandom(): void {
    const randomIndex = Math.floor(Math.random() * this.textures.length);
    this.setTile(randomIndex);
  }

  showGFX(option: boolean){
    if(option){
      this.node.addChild(this.gfx);
      this.gfx.setPosition(0, this.node.y/3);
    }
    else{
      this.gfx.parent = null
    }
  }
}
