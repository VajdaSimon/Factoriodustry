
const _dirs = [{
        x: 1,
        y: 0
    },
    {
        x: 0,
        y: 1
    },
    {
        x: -1,
        y: 0
    },
    {
        x: 0,
        y: -1
    }

]
function initShader(){
	Shaders.water = extendShader("water", {
		apply(){
			flyingbuffer.getTexture().bind(2);
			this.super$apply();
			this.setUniformi("u_flying", 2);
			this.setUniformf("mscl",new Vec2(300.0,60.0));
			this.setUniformf("tscal",1.0);
		}}
	);
	Shaders.tar = extendShader("tar", {
		apply(){
			flyingbuffer.getTexture().bind(2);
			this.super$apply();
			this.setUniformi("u_flying", 2);
			this.setUniformf("mscl",new Vec2(300.0,200.0));
			this.setUniformf("tscal",0.2);
		}}
	);
	Shaders.mud = extendShader("mud", {
		apply(){
			flyingbuffer.getTexture().bind(2);
			this.super$apply();
			this.setUniformi("u_flying", 2);
			this.setUniformf("mscl",new Vec2(100.0,100.0));
			this.setUniformf("tscal",0.02);
		}}
	);
	Shaders.slag = extendShader("slag", {});
	

	
		/*Shaders.water = extend(Shaders.SurfaceShader,readString("shaders/screenspace.vert"), readString("shaders/water.frag"),{
			apply(){
				flyingbuffer.getTexture().bind(2);
				this.super$apply();
				this.setUniformi("u_flying", 2);
				this.setUniformf("mscl",new Vec2(300.0,60.0));
			}
		});
		Shaders.tar = extend(Shaders.SurfaceShader,readString("shaders/screenspace.vert"), readString("shaders/tar.frag"),{
			apply(){
				//flyingbuffer.getTexture().bind(2);
				this.super$apply();
				//this.setUniformi("u_flying", 2);
				this.setUniformf("mscl",new Vec2(300.0,60.0));
			}
		});
		Shaders.slag = new Shaders.SurfaceShader(readString("shaders/screenspace.vert"), readString("shaders/slag.frag"));
		
		set a1 "set a1 "
		set q "\\""
		print a1
		print q
		print a1
		print q
		printflush message1
		*/
	
	
	
}
