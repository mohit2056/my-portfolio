import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, User } from "lucide-react";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", comment: "", rating: 5 });

  // 1. Database se real-time reviews fetch karna
  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  // 2. Naya review save karna
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    try {
      await addDoc(collection(db, "reviews"), {
        ...formData,
        createdAt: new Date()
      });
      setFormData({ name: "", comment: "", rating: 5 });
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-black mb-16 tracking-tighter text-center">Stellar Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Review Form */}
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl h-fit">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-blue-500" placeholder="Your Name" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})}/>
            <textarea required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-blue-500" placeholder="Your Thoughts..." value={formData.comment} onChange={(e)=>setFormData({...formData, comment:e.target.value})}/>
            <div className="flex gap-2">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={24} className={`cursor-pointer ${formData.rating >= s ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`} onClick={() => setFormData({...formData, rating: s})}/>
              ))}
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all">Post Review <Send size={18}/></button>
          </form>
        </div>

        {/* Reviews List */}
        <div className="space-y-4 max-h-150 overflow-y-auto pr-2 custom-scrollbar">
          <AnimatePresence>
            {reviews.map((rev) => (
              <motion.div key={rev.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold flex items-center gap-2 text-blue-400"><User size={16}/> {rev.name}</span>
                  <div className="flex text-yellow-400">
                    {/* Yahan fix kiya hai: Array loop sahi se chalega */}
                    {Array.from({ length: rev.rating || 0 }).map((_, i) => (
                      <Star key={i} size={12} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">"{rev.comment}"</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
